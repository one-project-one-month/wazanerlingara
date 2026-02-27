export class UpdateArticleDto {
  title?: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  categoryId?: string;
  published?: boolean;
}
