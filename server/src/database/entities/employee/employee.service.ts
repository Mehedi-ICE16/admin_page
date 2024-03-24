import { Injectable, Inject } from '@nestjs/common';
import { employee } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof employee
  ) {}

  async createEmployee(createEmployeeDto: any): Promise<employee> {
    return this.employeeRepository.create<employee>(createEmployeeDto);
  }  

  async findAllEmployee(): Promise<any[]> {
    return this.employeeRepository.findAll<any>();
  }

  async findByEmail(email:string): Promise<any> {
    return this.employeeRepository.findOne<employee>( { where: {email} } );
  }

  async updateEmployeeInfo(id: string, updateData: Partial<any>): Promise<void> {
    await this.employeeRepository.update(updateData, { where: { id } });
  }

  async deleteEmployee(id: string): Promise<void> {
    await this.employeeRepository.destroy({ where: { id } });
  }
}