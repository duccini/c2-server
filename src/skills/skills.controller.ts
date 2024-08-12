import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UUID } from 'crypto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  createSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.createSkill(createSkillDto);
  }

  @Get()
  getAllSkills() {
    return this.skillsService.getAllSkills();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.skillsService.getSkillById(id);
  }

  @Patch(':id')
  updateSkill(@Param('id') id: UUID, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.updateSkill(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.skillsService.deleteSkill(id);
  }
}
