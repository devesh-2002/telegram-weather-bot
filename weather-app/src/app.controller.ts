/* eslint-disable prettier/prettier */
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { FirebaseTestService } from './firebase-test.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly firebaseTestService: FirebaseTestService) {}

  @Get('test-firebase-connection')
  async testFirebaseConnection(): Promise<string> {
    return this.firebaseTestService.testFirebaseConnection();
  }
}