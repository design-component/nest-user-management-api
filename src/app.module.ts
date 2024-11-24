import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatModule } from './cat/cat.module';
import { ClassController } from './class/class.controller';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { Test1Module } from './test1/test1.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'school' }),
    CatModule,
    UserModule,
    AuthModule,
    UsersModule,
    ClassModule,
    StudentModule,
    Test1Module,
  ],
  controllers: [AppController, ClassController],
  providers: [AppService],
})
export class AppModule {}
