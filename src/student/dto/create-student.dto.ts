import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(0)
  @Max(10)
  readonly age: number;

  @IsString()
  readonly grade: string;
}
