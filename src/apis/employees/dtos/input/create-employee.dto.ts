import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsIn,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TypeIdentitiesList, TypeIdentity } from 'src/common/enums';

export class CreateEmployeeDto {
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @ApiProperty()
  @MaxLength(20)
  @MinLength(8)
  identityDocument: string;

  @IsEnum(TypeIdentity)
  @ApiProperty()
  typeIdentity: TypeIdentity;

  @IsNumber()
  @IsPositive()
  @Type((): NumberConstructor => Number)
  @ApiProperty()
  basicSalary: number;

  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  birthdate: Date;
}
