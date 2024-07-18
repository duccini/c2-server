import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectStatus } from '../enums/project-status.enum';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id?: UUID;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
  })
  @Column('date')
  created_at: Date;

  @Column('text')
  lead: string;

  @Column('text')
  teams: string;

  @Column('date')
  finished_at: Date;
}
