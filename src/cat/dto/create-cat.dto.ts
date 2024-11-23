import { Cat } from '../entities/cat.entity';

export class CreateCatDto implements Cat {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
