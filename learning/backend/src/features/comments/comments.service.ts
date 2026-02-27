import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  async findAll(query: any) {
    return { message: 'Get all comments', query };
  }

  async findOne(id: string) {
    return { message: `Get comment ${id}` };
  }

  async create(createCommentDto: CreateCommentDto) {
    return { message: 'Comment created', data: createCommentDto };
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return { message: `Comment ${id} updated`, data: updateCommentDto };
  }

  async remove(id: string) {
    return { message: `Comment ${id} deleted` };
  }
}
