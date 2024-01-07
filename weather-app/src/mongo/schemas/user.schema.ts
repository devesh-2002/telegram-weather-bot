/* eslint-disable prettier/prettier */
// src/mongo/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  telegramUserId: number;

  @Prop()
  preferredCity: string;
  
  @Prop({ default: false }) 
  blocked: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);
export { Document };

