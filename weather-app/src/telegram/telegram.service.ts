/* eslint-disable prettier/prettier */
// src/telegram/telegram.service.ts
import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';
import { WeatherService } from 'src/weather/weather.service';
import * as TelegramBot from 'node-telegram-bot-api';
import { MongoService } from 'src/mongo/mongo.service';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;
  private subscribedUsers: Map<number, string> = new Map<number, string>(); 

  constructor(private readonly weatherService: WeatherService,
    private readonly mongoService: MongoService,
    ) {
    this.bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

    this.setupBot();
    this.setupDailyUpdateJob();
  }

  private setupBot(): void {
    this.bot.onText(/\/weather (.+)/, async (msg: TelegramBot.Message, match: RegExpExecArray) => {
      const chatId: number = msg.chat.id;
      const userCity: string = match[1];
      console.log(chatId)
      
      try {
        const weatherData = await this.weatherService.getWeather(userCity);
        const temperatureKelvin: number = weatherData.main.temp;
        const temperatureCelsius: string = (temperatureKelvin - 273.15).toFixed(1);
        const description: string = weatherData.weather[0].description;

        const message: string = `Current weather in ${userCity}: ${temperatureCelsius}°C, ${description}`;
        this.bot.sendMessage(chatId, message);
      } catch (error) {
        this.bot.sendMessage(chatId, 'Error fetching weather information.');
      }
    });

    this.bot.onText(/\/subscribe/, async (msg: TelegramBot.Message) => {
      const chatId: number = msg.chat.id;
      this.bot.sendMessage(chatId, 'You are now subscribed to weather updates.');

      const existingUser = await this.mongoService.getUserByTelegramId(chatId);
      if (!existingUser) {
        this.bot.sendMessage(chatId, 'Please set your preferred city using /setcity command.');
      } else {
        const userCity: string = existingUser.preferredCity;
        this.subscribedUsers.set(chatId, userCity);
        this.bot.sendMessage(chatId, `Your preferred city is set to ${userCity}`);
      }
    });

    this.bot.onText(/\/setcity (.+)/, async (msg: TelegramBot.Message, match: RegExpExecArray) => {
      const chatId: number = msg.chat.id;
      const userCity: string = match[1];

      await this.mongoService.saveUser(chatId, userCity);

      this.subscribedUsers.set(chatId, userCity);

      this.bot.sendMessage(chatId, `Your preferred city is set to ${userCity}`);
    });

    this.bot.onText(/\/unsubscribe/, async (msg: TelegramBot.Message) => {
      const chatId: number = msg.chat.id;
      await this.mongoService.deleteUser(chatId);

      this.subscribedUsers.delete(chatId);
      this.bot.sendMessage(chatId, 'You have unsubscribed from weather updates.');
    });
  }


  private setupDailyUpdateJob(): void {
    const job = new CronJob('0 0 0 * * *', async () => {
      for (const [userId, userCity] of this.subscribedUsers) {
        try {
          const weatherData = await this.weatherService.getWeather(userCity);
          const temperatureKelvin: number = weatherData.main.temp;
          const temperatureCelsius: string = (temperatureKelvin - 273.15).toFixed(1);
          const description: string = weatherData.weather[0].description;
  
          const message: string = `Weather update every 2 minutes for ${userCity}: ${temperatureCelsius}°C, ${description}`;
          this.bot.sendMessage(userId, message);
        } catch (error) {
          console.error(`Error sending update to user ${userId}: ${error.message}`);
        }
      }
    });
  
    job.start();
  }
  
}