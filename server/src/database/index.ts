export { DatabaseModule } from './database.module';
export { PrismaService } from './prisma.service';

// Re-export Prisma client and generated types so the rest of the app
// can import "database models" from a single place.
export {
  PrismaClient,
  type User,
  type Profile,
  type Friend,
  type Category,
  type GameRoom,
  type Participant,
  type History,
} from '@prisma/client';
