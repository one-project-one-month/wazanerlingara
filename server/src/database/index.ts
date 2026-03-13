export { DatabaseModule } from './database.module';
export { PrismaService } from './prisma.service';

// Re-export Prisma client so the rest of the app
// can inject/use a single shared client instance.
export { PrismaClient } from '@prisma/client';
