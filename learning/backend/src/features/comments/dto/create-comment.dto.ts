export class CreateCommentDto {
  articleId: string;
  content: string;
  parentId?: string;
}
