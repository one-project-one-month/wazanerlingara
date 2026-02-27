import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { FollowersService } from './followers.service';

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Get(':userId/followers')
  async getFollowers(@Param('userId') userId: string) {
    return this.followersService.getFollowers(userId);
  }

  @Get(':userId/following')
  async getFollowing(@Param('userId') userId: string) {
    return this.followersService.getFollowing(userId);
  }

  @Post(':userId/follow')
  async follow(@Param('userId') userId: string) {
    return this.followersService.follow(userId);
  }

  @Delete(':userId/unfollow')
  async unfollow(@Param('userId') userId: string) {
    return this.followersService.unfollow(userId);
  }
}
