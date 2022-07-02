import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import RegisterAccount from '../../global/interfaces/registerAccount.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>
    ) {}

    async findOne(params) {
        const user = await this.accountRepository.findOne(params);
        return user;
    }

    async update(criteria: any, update: any) {
        const user = await this.accountRepository.update(criteria, update);
        return user;
    }

    async login(email: string, password: string): Promise<any | undefined> {
        const user: Account = await this.accountRepository.findOne({
            email: email
        });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return user;
            }
        }

        return false;
    }

    async create(details: RegisterAccount): Promise<any | undefined> {
        return await this.accountRepository.save(
            this.accountRepository.create({
                name: details.name,
                email: details.email,
                password: details.password
            })
        );
    }
}
