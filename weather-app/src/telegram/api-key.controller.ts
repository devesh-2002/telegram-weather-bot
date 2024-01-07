/* eslint-disable prettier/prettier */
// admin.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';

@Controller('admin')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Get('api-key')
  getApiKey() {
    return this.apiKeyService.getApiKey();
  }

  @Post('api-key')
  setApiKey(@Body() apiKey: { key: string }) {
    return this.apiKeyService.setApiKey(apiKey.key);
  }

  @Get('users')
  getUsers() {
    return this.apiKeyService.getUsers();
  }
}