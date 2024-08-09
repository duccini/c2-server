import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { EnumSkills } from '../enums/enum-skills.enum';
import { User } from 'src/users/entities/user.entity';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column({
    type: 'enum',
    enum: EnumSkills,
    array: true,
  })
  skills?: EnumSkills[];

  @ManyToMany(() => User, (user) => user.skills, {})
  users?: User[];
}
