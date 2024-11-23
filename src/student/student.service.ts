import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async create(student: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
