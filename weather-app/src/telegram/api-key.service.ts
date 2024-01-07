/* eslint-disable prettier/prettier */
// admin.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyService {
  private apiKey: string = '3afaf6d8497970c3796e7353691b1f4a';
  private users: string[] = []; 

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): string {
    this.apiKey = key;
    console.log(key)
    return key;
  }

  getUsers(): string[] {
    return this.users;
  }
}