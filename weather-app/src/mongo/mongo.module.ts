/* eslint-disable prettier/prettier */
// src/mongo/mongo.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';
import { User, UserSchema } from './schemas/user.schema';
import { MongoController } from './mongo.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [MongoController],
  providers: [MongoService],
  exports: [MongoService],
})
export class MongoModule {}
