import { Injectable } from '@nestjs/common';

@Injectable()
export class FollowersService {
  async getFollowers(userId: string) {
    return { message: `Get followers for user ${userId}` };
  }

  async getFollowing(userId: string) {
    return { message: `Get following for user ${userId}` };
  }

  async follow(userId: string) {
    return { message: `Followed user ${userId}` };
  }

  async unfollow(userId: string) {
    return { message: `Unfollowed user ${userId}` };
  }
}
