/* eslint-disable prettier/prettier */
// src/mongo/mongo.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.mongoService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User | null> {
    return this.mongoService.getUserByTelegramId(id);
  }

  @Post()
  createUser(@Body() createUserDto: { telegramUserId: number; preferredCity: string }): Promise<User> {
    const { telegramUserId, preferredCity } = createUserDto;
    return this.mongoService.saveUser(telegramUserId, preferredCity);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.mongoService.deleteUser(id);
  }

  @Post('block/:id')
  blockUser(@Param('id') id: number): Promise<void> {
    return this.mongoService.blockUser(id);
  }

  @Post('unblock/:id')
  unblockUser(@Param('id') id: number): Promise<void> {
    return this.mongoService.unblockUser(id);
  }
}
