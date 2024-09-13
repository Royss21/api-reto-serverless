import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { EmployeesService } from '../services/employees.service';
import { CreateEmployeeDto } from '../dtos/input/create-employee.dto';
import { Employee } from '../entities/employee.entity';
import { ApiTags } from '@nestjs/swagger';
import { IEmployeesService } from '../services/employees.service.interface';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(
    @Inject(EmployeesService)
    private readonly _employeeService: IEmployeesService,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this._employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this._employeeService.findAll();
  }
}
