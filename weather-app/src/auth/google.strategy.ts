/* eslint-disable prettier/prettier */
// google.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:5173/auth/google/callback',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile: Profile, done: any): Promise<any> {
    const user = {
      email: profile.emails[0].value,
      name: profile.displayName,
      accessToken,
    };
    return done(null, user);
  }
}