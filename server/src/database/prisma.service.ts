import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    // $connect is a well-typed Prisma client method; this rule is overly strict here.

    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
