import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from '../dtos/input/create-employee.dto';
import { EmployeeRepository } from '../repositories/employees.repository';
import { IEmployeesService } from './employees.service.interface';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeesService implements IEmployeesService {
  constructor(private readonly _employeeRepository: EmployeeRepository) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const { typeIdentity, identityDocument, ...restData } = createEmployeeDto;
    await this._employeeRepository.existsByIdentityDocument(
      typeIdentity,
      identityDocument,
    );

    return this._employeeRepository.saveEmployee({
      ...restData,
      typeIdentity,
      identityDocument,
      id: 0,
    });
  }

  async findAll(): Promise<Employee[]> {
    return await this._employeeRepository.findAll();
  }
}
