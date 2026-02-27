import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async findAll() {
    return { message: 'Get all users' };
  }

  async getCurrentUser() {
    const user = {
      id: '1',
      email: 'user@example.com',
      username: 'demo_user',
      firstName: 'Demo',
      lastName: 'User',
      bio: 'This is a demo user profile',
      avatar: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return { message: 'Get current user', data: user };
  }

  async findOne(id: string) {
    return { message: `Get user ${id}` };
  }

  async create(createUserDto: CreateUserDto) {
    return { message: 'User created', data: createUserDto };
  }

  async updateCurrentUser(updateUserDto: UpdateUserDto) {
    const user = {
      id: '1',
      email: updateUserDto.email || 'user@example.com',
      username: updateUserDto.username || 'demo_user',
      firstName: updateUserDto.firstName || 'Demo',
      lastName: updateUserDto.lastName || 'User',
      bio: updateUserDto.bio || '',
      avatar: updateUserDto.avatar || '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return { message: 'User updated successfully', data: user };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return { message: `User ${id} updated`, data: updateUserDto };
  }

  async remove(id: string) {
    return { message: `User ${id} deleted` };
  }
}
