import { IsString, IsDateString, MinLength } from 'class-validator';

export class UpdateDto {
    @MinLength(2)
    @IsString()
    note: string;

    @IsDateString()
    datetime: string;
}
