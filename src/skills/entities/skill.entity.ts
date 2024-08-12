import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EnumStacks } from '../enums/stacks-enum.enum';
import { User } from 'src/users/entities/user.entity';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EnumStacks,
    nullable: true,
  })
  stack: EnumStacks;

  @OneToMany(() => User, (user) => user.skill, {})
  users: User[];
}
