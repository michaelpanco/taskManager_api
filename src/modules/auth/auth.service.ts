import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private accountService: AccountService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const account = await this.accountService.login(email, password);

        if (account) {
            const { password, ...result } = account;
            return result;
        } else {
            return false;
        }
    }

    async login(account: any) {
        const payload = { id: account.id };

        return {
            statusCode: 200,
            message: 'Authenticated',
            data: {
                ...account,
                access_token: this.jwtService.sign(payload)
            }
        };
    }
}
