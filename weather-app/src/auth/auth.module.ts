/* eslint-disable prettier/prettier */
// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAdminModule } from '../firebase-admin.module';
import { FirebaseTestService } from '../firebase-test.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [PassportModule, FirebaseAdminModule],
  providers: [FirebaseTestService, GoogleStrategy],
  exports: [FirebaseTestService], 
})
export class AuthModule {}
