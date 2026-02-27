import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    return { message: 'User registered successfully', data: registerDto };
  }

  async login(loginDto: LoginDto) {
    return { message: 'Login successful', token: 'sample-token' };
  }

  async getProfile(user: any) {
    return { user };
  }
}
