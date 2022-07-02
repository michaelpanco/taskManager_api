import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { AccountService } from '../account/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Account } from '../account/entities/account.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task]),
        TypeOrmModule.forFeature([Account])
    ],
    controllers: [TaskController],
    providers: [TaskService, AccountService],
    exports: [TypeOrmModule.forFeature([Task]), TaskService]
})
export class TaskModule {}
