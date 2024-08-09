import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EnumStacks } from '../enums/stacks-enum.enum';
import { User } from 'src/users/entities/user.entity';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column({
  //   type: 'enum',
  //   enum: EnumStacks,
  //   array: true,
  //   nullable: true,
  // })
  // stacks: EnumStacks[];
  @Column({
    type: 'enum',
    enum: EnumStacks,
    nullable: true,
  })
  stack: EnumStacks;

  @ManyToMany(() => User, (user) => user.skills)
  users: User[];
}
