import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities/employee.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { TypeIdentity } from 'src/common/enums';

export class EmployeeRepository extends Repository<Employee> {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {
    super(
      employeesRepository.target,
      employeesRepository.manager,
      employeesRepository.queryRunner,
    );
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeesRepository.find();
  }

  async existsByIdentityDocument(
    typeIdentity: TypeIdentity,
    identityDocument: string,
  ): Promise<void> {
    const existsEmployee = await this.employeesRepository.exists({
      where: {
        typeIdentity,
        identityDocument,
      },
    });

    if (existsEmployee)
      throw new BadRequestException(
        `Ya existe un empleado registrado con el documento ${typeIdentity} ${identityDocument}`,
      );
  }

  async saveEmployee(employee: Employee): Promise<Employee> {
    const createEmployee = this.employeesRepository.create(employee);
    return await this.employeesRepository.save(createEmployee);
  }
}
