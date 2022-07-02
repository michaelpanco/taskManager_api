import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModule } from '../account/account.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AccountService } from '../account/account.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants/auth';
import { JwtStrategy } from './jwt.strategy';

const JWTregister: DynamicModule = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: jwtConstants.expiry }
});

@Module({
    imports: [AccountModule, PassportModule, JWTregister],
    providers: [AuthService, LocalStrategy, AccountService, JwtStrategy],
    exports: [AuthService, JWTregister]
})
export class AuthModule {}
