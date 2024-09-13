import { CreateEmployeeDto } from '../dtos/input';
import { Employee } from '../entities/employee.entity';

export interface IEmployeesService {
  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
