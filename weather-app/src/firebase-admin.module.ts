/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
// firebase-admin.module.ts
import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useValue: admin.initializeApp({
        credential: admin.credential.cert(require('../admin-telegram-bot-firebase-adminsdk-zwg51-fa6fd34026.json') as admin.ServiceAccount),
      }),
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseAdminModule {}