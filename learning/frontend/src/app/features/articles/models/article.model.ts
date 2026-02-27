export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  categoryId?: string;
  published: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateArticleRequest {
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  categoryId?: string;
  published?: boolean;
}

export interface UpdateArticleRequest {
  title?: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  categoryId?: string;
  published?: boolean;
}
