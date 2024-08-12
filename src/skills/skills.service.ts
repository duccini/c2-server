import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
import { EnumStacks } from './enums/stacks-enum.enum';
import { UUID } from 'crypto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private skillRepository: Repository<Skill>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createSkill(createSkillDto: CreateSkillDto) {
    try {
      const checkStack = await this.skillRepository.findOne({
        where: {
          stack: createSkillDto.stack,
        },
      });

      if (checkStack) throw new BadRequestException('Stack já cadastrada');
      return await this.skillRepository.save(createSkillDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAllSkills(): Promise<Skill[]> {
    try {
      const skills = await this.skillRepository.find();

      if (skills.length === 0) {
        throw new NotFoundException(`Não há habilidades cadastrados...`);
      }
      return skills;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async getSkillById(id: UUID): Promise<Skill> {
    try {
      const skill = await this.skillRepository.findOne({
        where: { id: id },
      });

      if (!skill) throw new NotFoundException('Habilidade não encontrada');

      return skill;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateSkill(id: UUID, updateSkillDto: UpdateSkillDto) {
    try {
      const checkStack = await this.skillRepository.findOne({
        where: {
          stack: updateSkillDto.stack,
        },
      });

      if (checkStack) throw new BadRequestException('Stack já cadastrada');
      await this.skillRepository.update(id, updateSkillDto);
      return 'Habilidade atualizada.';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteSkill(id: UUID) {
    try {
      const skill = await this.getSkillById(id);
      await this.userRepository.update({ id: id }, { skill: null });

      await this.skillRepository.remove(skill);
      return 'Habilidade removida.';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
