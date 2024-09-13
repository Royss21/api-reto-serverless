import { TypeIdentity } from 'src/common/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees', { schema: 'rrhh' })
export class Employee {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    default: '',
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    default: '',
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: '',
  })
  identityDocument: string;

  @Column({
    type: 'varchar',
    length: 5,
    nullable: false,
    default: '',
  })
  typeIdentity: TypeIdentity;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  basicSalary: number;

  @Column({
    type: 'datetime',
    nullable: false,
  })
  birthdate: Date;
}
