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

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private skillRepository: Repository<Skill>,
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

  async getAllSkills() {
    const skills = await this.skillRepository.find();

    if (skills.length === 0) {
      throw new NotFoundException(`Não há habilidades cadastrados...`);
    }
    return skills;
  }
  async getSkillById(id: UUID): Promise<Skill> {
    const skill = await this.skillRepository.findOne({
      where: { id: id },
    });

    if (!skill) throw new NotFoundException('Habilidade não encontrada');

    return skill;
  }
  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }
  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
