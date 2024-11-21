import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catService.findAll();
  }
}
