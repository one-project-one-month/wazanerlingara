import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  private articles: any[] = [
    {
      id: '1',
      title: 'Welcome to CMS',
      content: 'This is your first article. You can edit or delete it.',
      excerpt: 'Welcome to the Content Management System',
      coverImage: '',
      published: true,
      authorId: '1',
      tags: ['welcome', 'getting-started'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  async findAll(query: any) {
    return { message: 'Get all articles', data: this.articles };
  }

  async findOne(id: string) {
    const article = this.articles.find(a => a.id === id);
    if (article) {
      return { message: `Get article ${id}`, data: article };
    }
    return { message: `Article ${id} not found`, data: null };
  }

  async create(createArticleDto: CreateArticleDto) {
    const article = {
      id: Date.now().toString(),
      ...createArticleDto,
      published: createArticleDto.published || false,
      authorId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articles.push(article);
    return { message: 'Article created', data: article };
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    const articleIndex = this.articles.findIndex(a => a.id === id);
    if (articleIndex !== -1) {
      this.articles[articleIndex] = {
        ...this.articles[articleIndex],
        ...updateArticleDto,
        updatedAt: new Date(),
      };
      return { message: `Article ${id} updated`, data: this.articles[articleIndex] };
    }
    return { message: `Article ${id} not found`, data: null };
  }

  async remove(id: string) {
    const articleIndex = this.articles.findIndex(a => a.id === id);
    if (articleIndex !== -1) {
      this.articles.splice(articleIndex, 1);
      return { message: `Article ${id} deleted` };
    }
    return { message: `Article ${id} not found` };
  }

  async publish(id: string) {
    return { message: `Article ${id} published` };
  }

  async unpublish(id: string) {
    return { message: `Article ${id} unpublished` };
  }
}
