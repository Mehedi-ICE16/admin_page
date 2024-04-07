import { Controller, Post, Get, Put, Delete, Body,Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { TeamService } from '../team/team.service';

@Controller('/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService, private readonly teamService: TeamService) {}

  @Post()
  async createEmployee(@Body() createEmployeeDto: any) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  async findAllEmployee() {
    return this.employeeService.findAllEmployee();
  }

  @Get('/:id')
  async findAllEmployeeByTeamId(@Param('id') team_id: number) {
    const team = await this.teamService.findOne(team_id);
    const roles = team?.roles;
    const employees = await this.employeeService.findAllEmployeeByTeamId(team_id);
    return { roles, employees };
  }

  @Put('/:id')
  async updateEmployeeInfo( @Param('id') id: string, @Body() updateData: Partial<any>, ): Promise<any> {
    const updatedData = await this.employeeService.updateEmployeeInfo(id, updateData);
    console.log(updatedData);
    return updatedData;
  }

  @Delete('/:id')
  async deleteEmployee(@Param('id') id: string): Promise<void> {
    await this.employeeService.deleteEmployee(id);
  }
}