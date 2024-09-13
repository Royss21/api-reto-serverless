import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './unitOfWork/entities';

import { EmployeeRepository } from './unitOfWork/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeRepository],
  exports: [EmployeeRepository, TypeOrmModule],
})
export class RepositoriesModule {}
