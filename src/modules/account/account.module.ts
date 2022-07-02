import { DynamicModule, Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants/auth';
import { JwtStrategy } from '../auth/jwt.strategy';

const JWTregister: DynamicModule = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: jwtConstants.expiry }
});

@Module({
    imports: [TypeOrmModule.forFeature([Account]), JWTregister],
    controllers: [AccountController],
    providers: [AccountService],
    exports: [TypeOrmModule.forFeature([Account]), AccountService]
})
export class AccountModule {}
