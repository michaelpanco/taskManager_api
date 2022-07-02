import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
    keepConnectionAlive: true,
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/../database/migrations'
    },
    extra: {
        charset: 'utf8mb4_unicode_ci'
    }
};

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (
        configService: ConfigService
    ): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: configService.get('DATABASE_HOST'),
            port: +configService.get('DATABASE_PORT'),
            username: configService.get('DATABASE_USER'),
            password: configService.get('DATABASE_PASS'),
            database: configService.get('DATABASE_NAME'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
            keepConnectionAlive: true,
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: __dirname + '/../migrations'
            },
            extra: {
                charset: 'utf8mb4_unicode_ci'
            }
        };
    }
};
