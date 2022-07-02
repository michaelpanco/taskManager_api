import {
    Controller,
    Get,
    UseGuards,
    Post,
    Request,
    HttpCode
} from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/auth.decorators';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Public()
    @Get()
    index() {
        return {
            version: process.env.APP_VERSION,
            build: '5',
            message: 'CareLulu API'
        };
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @HttpCode(200)
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
