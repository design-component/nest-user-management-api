import { Body, Controller, Get, Post } from '@nestjs/common';
import { Student } from './student.interface';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.create(student);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
