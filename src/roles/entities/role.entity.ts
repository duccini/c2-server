import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EnumRoles } from '../enums/roles-enum.enum';
import { User } from 'src/users/entities/user.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EnumRoles,
    nullable: true,
  })
  role: EnumRoles;

  @OneToMany(() => User, (user) => user.role, {
    cascade: true,
  })
  users: User[];
}
