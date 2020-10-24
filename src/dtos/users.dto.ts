import {
  IsEmail,
  IsString,
  IsInt,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public firstname: string;
  @IsString()
  public lastname: string;

  @IsString()
  public password: string;

  @IsString()
  phone: string;

  public role: number;
}
