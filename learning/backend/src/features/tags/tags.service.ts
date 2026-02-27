import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  async findAll() {
    return { message: 'Get all tags' };
  }

  async findOne(id: string) {
    return { message: `Get tag ${id}` };
  }

  async create(createTagDto: CreateTagDto) {
    return { message: 'Tag created', data: createTagDto };
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    return { message: `Tag ${id} updated`, data: updateTagDto };
  }

  async remove(id: string) {
    return { message: `Tag ${id} deleted` };
  }
}
