import { Injectable, Inject } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof Employee
  ) {}

  async createEmployee(createEmployeeDto: any): Promise<Employee> {
    return this.employeeRepository.create<Employee>(createEmployeeDto);
  }  

  async findAllEmployee(): Promise<any[]> {
    return this.employeeRepository.findAll<any>();
  }

  async findByEmail(email:string): Promise<any> {
    return this.employeeRepository.findOne<Employee>( { where: {email} } );
  }

  async findAllEmployeeByRoleId(id: number[]): Promise<Employee[]> {
    return this.employeeRepository.findAll<Employee>({ where: { role_id: id } });
  }

  async updateEmployeeInfo(id: string, updateData: Partial<any>): Promise<void> {
    await this.employeeRepository.update(updateData, { where: { id } });
  }

  async deleteEmployee(id: string): Promise<void> {
    await this.employeeRepository.destroy({ where: { id } });
  }
}