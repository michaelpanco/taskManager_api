import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import CreateTask from '../../global/interfaces/createTask.interface';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    async findOne(params) {
        const task = await this.taskRepository.findOne(params);
        return task;
    }

    async find(params) {
        const tasks = await this.taskRepository.find(params);
        return tasks;
    }

    async update(criteria: any, update: any) {
        const updateTask = await this.taskRepository.update(criteria, update);
        return updateTask;
    }

    async create(details: CreateTask): Promise<any | undefined> {
        return await this.taskRepository.save(
            this.taskRepository.create({
                note: details.note,
                dateTime: details.datetime,
                account: details.account
            })
        );
    }

    async delete(criteria: any) {
        const deletedTask = await this.taskRepository.delete(criteria);
        return deletedTask;
    }
}
