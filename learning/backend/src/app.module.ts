import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './features/auth/auth.module';
import { UsersModule } from './features/users/users.module';
import { ArticlesModule } from './features/articles/articles.module';
import { CommentsModule } from './features/comments/comments.module';
import { TagsModule } from './features/tags/tags.module';
import { CategoriesModule } from './features/categories/categories.module';
import { MediaModule } from './features/media/media.module';
import { FollowersModule } from './features/followers/followers.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UsersModule,
    ArticlesModule,
    CommentsModule,
    TagsModule,
    CategoriesModule,
    MediaModule,
    FollowersModule,
  ],
})
export class AppModule {}
