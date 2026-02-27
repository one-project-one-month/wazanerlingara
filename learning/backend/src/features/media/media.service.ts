import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  async findAll() {
    return { message: 'Get all media files' };
  }

  async findOne(id: string) {
    return { message: `Get media ${id}` };
  }

  async upload(file: any) {
    return { message: 'File uploaded', file };
  }

  async remove(id: string) {
    return { message: `Media ${id} deleted` };
  }
}
