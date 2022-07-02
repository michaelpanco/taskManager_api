import { IsEnum, IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
    @MinLength(2)
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;
}
