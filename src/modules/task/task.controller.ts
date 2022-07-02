import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    Request,
    Put,
    Param,
    Delete,
    Get
} from '@nestjs/common';
import { TaskService } from './task.service';
import { AccountService } from '../account/account.service';
import { CreateDto, UpdateDto } from '../../global/dto/task';
@Controller('tasks')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
        private readonly accountService: AccountService
    ) {}

    /**
     * @name create
     * @desc Create a task
     * @param {string} note
     * @param {string} datetime
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Post()
    async create(@Body() createDto: CreateDto, @Request() req) {
        // get the current account of the logged in user and assign this task
        const account = await this.accountService.findOne({ id: req.user.id });

        // call the create method from task service to register a task
        const createTask = await this.taskService.create({
            note: createDto.note,
            datetime: createDto.datetime,
            account: account
        });

        // Don't show the account details in the response
        delete createTask.account;
        return {
            statusCode: 201,
            message: 'Your task has been created.',
            details: createTask
        };
    }

    /**
     * @name update
     * @desc Update a task
     * @param {string} note
     * @param {string} datetime
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Put(':id')
    async update(
        @Body() updateDto: UpdateDto,
        @Request() req,
        @Param() params
    ) {
        // get the current account of the logged in user and to verify if it owns the task
        const account = await this.accountService.findOne({ id: req.user.id });

        // call the update method from task service to update a task
        const updateTask = await this.taskService.update(
            {
                id: params.id,
                account: account
            },
            {
                note: updateDto.note,
                dateTime: updateDto.datetime
            }
        );
        // check if the task has been updated properly
        if (updateTask.affected === 0) {
            throw new HttpException(
                'Failed to update the task. Please check your request data',
                HttpStatus.NOT_ACCEPTABLE
            );
        }
        // get the update task details
        const updatedTask = await this.taskService.findOne({
            id: params.id
        });

        return {
            statusCode: 201,
            message: 'Your task has been updated.',
            details: updatedTask
        };
    }

    /**
     * @name delete
     * @desc Delete a task
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Delete(':id')
    async delete(@Request() req, @Param() params) {
        // get the current account of the logged in user and to verify if it owns the task
        const account = await this.accountService.findOne({ id: req.user.id });

        // call the delete method from task service to delete a task
        const deleteTask = await this.taskService.delete({
            id: params.id,
            account: account
        });
        // check if the task has been deleted properly
        if (deleteTask.affected === 0) {
            throw new HttpException(
                'Failed to delete the task. Please check your request data',
                HttpStatus.NOT_ACCEPTABLE
            );
        }

        return {
            statusCode: 201,
            message: 'Your task has been deleted.',
            data: {
                id: params.id
            }
        };
    }

    /**
     * @name details
     * @desc get the task detail
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Get(':id')
    async details(@Request() req, @Param() params) {
        // get the current account of the logged in user and to verify if it owns the task
        const account = await this.accountService.findOne({ id: req.user.id });

        // call the findOne method from task service to get the details of the task
        const task = await this.taskService.findOne({
            id: params.id,
            account: account
        });

        if (task === undefined) {
            throw new HttpException('Task not found.', HttpStatus.NOT_FOUND);
        }

        return {
            statusCode: 200,
            message: 'Successfully fetched record',
            data: task
        };
    }

    /**
     * @name lists
     * @desc fetch all tasks
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Get()
    async lists(@Request() req, @Param() params) {
        // get the current account of the logged in user and to verify if it owns the task
        const account = await this.accountService.findOne({ id: req.user.id });

        // call the findOne method from task service to get the details of the task
        const tasks = await this.taskService.find({
            account: account
        });

        return {
            statusCode: 200,
            message: 'Successfully fetched tasks',
            data: tasks
        };
    }
}
