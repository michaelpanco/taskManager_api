import {
    IsEnum,
    IsString,
    IsEmail,
    IsDateString,
    MinLength
} from 'class-validator';

export class CreateDto {
    @MinLength(2)
    @IsString()
    note: string;

    @IsDateString()
    datetime: string;
}
