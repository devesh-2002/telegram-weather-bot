/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { WeatherService } from '../weather/weather.service'; 
import { MongoModule } from 'src/mongo/mongo.module';
import { MongoService } from 'src/mongo/mongo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/mongo/schemas/user.schema';
import { ApiKeyService } from './api-key.service';
import { ApiKeyController } from './api-key.controller';

@Module({
  imports : [MongoModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [TelegramService, WeatherService, MongoService, ApiKeyService],
  exports: [TelegramService,ApiKeyService],
  controllers :[ApiKeyController]
})
export class TelegramModule {}