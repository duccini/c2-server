import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skills/skills.module';
import { RolesModule } from './roles/roles.module';

import { Skill } from './skills/entities/skill.entity';
import { User } from './users/entities/user.entity';
import { Project } from './project/entities/project.entity';
import { Role } from './roles/entities/role.entity';
import { TypeOrmConfigModule } from './configs/typeOrmConfig.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProjectModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    TeamsModule,
    AuthModule,
    SkillsModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
