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
    return this.skillsService.getBySkill(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
