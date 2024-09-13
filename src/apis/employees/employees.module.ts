import { Module } from '@nestjs/common';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';
import { RepositoriesModule } from 'src/shared/repositories/repositories.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [RepositoriesModule],
})
export class EmployeesModule {}
