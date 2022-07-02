import { Module } from '@nestjs/common';
import { AppModule as ApplicationModule } from './modules/app/app.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/jwt.auth.guard';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';

import { TaskModule } from './modules/task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        AuthModule,
        ApplicationModule,
        TaskModule
    ],
    providers: [
        {
            provide: 'APP_GUARD',
            useClass: JwtAuthGuard
        }
    ]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
