import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  async findAll() {
    return { message: 'Get all categories' };
  }

  async findOne(id: string) {
    return { message: `Get category ${id}` };
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return { message: 'Category created', data: createCategoryDto };
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return { message: `Category ${id} updated`, data: updateCategoryDto };
  }

  async remove(id: string) {
    return { message: `Category ${id} deleted` };
  }
}
