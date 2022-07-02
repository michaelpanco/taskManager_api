import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Public } from '../auth/auth.decorators';
import { RegisterDto } from '../../global/dto/account';
import { JwtService } from '@nestjs/jwt';
@Controller('accounts')
export class AccountController {
    constructor(
        private readonly accountService: AccountService,
        private jwtService: JwtService
    ) {}

    /**
     * @name register
     * @desc Register an account
     * @param {string} name
     * @param {string} email
     * @param {string} password
     *
     * @return {statusCode: number, message: string, data?: Object}
     */
    @Public()
    @Post()
    async register(@Body() registerDto: RegisterDto) {
        const account = await this.accountService.findOne({
            email: registerDto.email
        });

        //Check if email already existed in the database
        if (account !== undefined) {
            throw new HttpException(
                'Please enter a different email address.',
                HttpStatus.NOT_ACCEPTABLE
            );
        }
        // call the create method from account service to register an account
        const registerAccount = await this.accountService.create({
            name: registerDto.name,
            email: registerDto.email,
            password: registerDto.password
        });
        // Don't show the password in the response
        delete registerAccount.password;
        const payload = { id: registerAccount.id };
        return {
            statusCode: 201,
            message: 'Your account has been created.',
            data: {
                ...registerAccount,
                access_token: this.jwtService.sign(payload)
            }
        };
    }
}
