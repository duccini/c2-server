import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  entities: [Project, User],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
