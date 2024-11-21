import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { RolesGuard } from 'src/auth/roles.decorator';
import { Roles } from 'src/auth/roles.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() createUserDto: { name: string; email: string; password: string },
  ) {
    return this.userService.createUser(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.userService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (user) {
      // return { token: await this.authService.generateToken(user) };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    // return this.userService.findUserById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    // return this.userService.deleteUserById(id);
  }
}
