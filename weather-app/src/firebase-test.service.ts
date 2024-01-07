/* eslint-disable prettier/prettier */
// src/firebase-test.service.ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class FirebaseTestService {
  constructor(@Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: any) {}

  async testFirebaseConnection(): Promise<string> {
    try {
      const result = await this.firebaseAdmin.auth().listUsers(10);
      console.log("Email : "+result.users[0].email)
      console.log("Display Name : "+result.users[0].displayName)
      return `Firebase Connection Successful: ${JSON.stringify(result.users)}`;
    } catch (error) {
      return `Firebase Connection Failed: ${error.message}`;
    }
  }
}