/* eslint-disable prettier/prettier */
// src/auth.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/mongo/schemas/user.schema';

interface AuthenticatedRequest extends Request {
  user: User; 
}

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(): void {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req: AuthenticatedRequest): { message: string; user: User } {
    return {
      message: 'Google login successful',
      user: req.user,
    };
  }
}
