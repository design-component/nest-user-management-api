import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';

@Injectable()
export class UserService {
  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = new this.userModel({
    //   name,
    //   email,
    //   password: hashedPassword,
    // });
    // return newUser.save();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    // const user = await this.userModel.findOne({ email });
    // if (user && (await bcrypt.compare(password, user.password))) {
    //   return user;
    // }
    return null;
  }
}
