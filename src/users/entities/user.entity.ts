import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoles } from '../enums/user-role.enum';
import { Project } from 'src/project/entities/project.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Skill } from 'src/skills/entities/skill.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column('text')
  username: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    nullable: true,
  })
  role: UserRoles;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column('text', { unique: true, default: null })
  github?: string;

  @Column('text', { unique: true, default: null })
  linkedin?: string;

  @Column('text', { default: null }) // { unique: true })
  website?: string;

  @OneToMany(() => Project, (project) => project.lead)
  projects?: Project[];

  @ManyToMany(() => Team, (team) => team.members, { eager: true })
  teams?: Team[];

  @ManyToOne(() => Skill, (skill) => skill.users, {
    eager: true,
  })
  @JoinTable()
  skill?: Skill;
}
