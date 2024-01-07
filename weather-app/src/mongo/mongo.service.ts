/* eslint-disable prettier/prettier */
// src/mongo/mongo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class MongoService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async saveUser(telegramUserId: number, preferredCity: string): Promise<User> {
    const user = new this.userModel({ telegramUserId, preferredCity });
    return user.save();
  }

  async deleteUser(telegramUserId: number): Promise<void> {
    await this.userModel.deleteOne({ telegramUserId }).exec();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByTelegramId(telegramUserId: number): Promise<User | null> {
    return this.userModel.findOne({ telegramUserId }).exec();
  }

  async blockUser(telegramUserId: number): Promise<void> {
    const user = await this.getUserByTelegramId(telegramUserId);

    if (user) {
      user.blocked = true;
      await user.save();
    }
  }

  async unblockUser(telegramUserId: number): Promise<void> {
    const user = await this.getUserByTelegramId(telegramUserId);

    if (user) {
      user.blocked = false;
      await user.save();
    }
  }
}
