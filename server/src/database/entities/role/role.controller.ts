import { Controller, Post, Get, Put, Delete, Body,Param } from '@nestjs/common';
import { RoleService } from './role.service';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { TeamRoleService } from '../team_role/team_role.service';

@Controller('/role')
export class RoleController {
  constructor(private readonly roleService: RoleService, private employeeService: EmployeeService, private teamRoleService: TeamRoleService) {}

  @Post()
  async create(@Body() createRoleDto: any) {
    const { team_id,access,isAuthor,sequence } = createRoleDto;
    const newRole = await this.roleService.createRole(createRoleDto);
    const { id } = newRole;
    const teamRole = await this.teamRoleService.createTeamRole({ team_id, role_id: id, access, isAuthor, sequence });
    return newRole;
  }

  @Get()
  async findAllRole() {
    return this.roleService.findAllRole();
  }
  @Get('/:team_id')
  async findAllRoleByTeamId(@Param('id') team_id: number) {
    // const roles = this.roleService.findAllRoleByTeamId(id);
    // let employees: Employee[] = [];

    // const roleId: number[] = (await roles).map(role => role.id);
    // const roleName: string[] = (await roles).map(role => role.name);

    // employees = await this.employeeService.findAllEmployeeByTeamId(roleId);

    // return { roleId,roleName, employees };
  }

  @Put('/:id')
  async updateRole( @Param('id') id: string, @Body() updateData: Partial<any>, ): Promise<void> {
    await this.roleService.updateRole(id, updateData);
  }

  @Delete('/:id')
  async deleteRole(@Param('id') id: string): Promise<void> {
    await this.roleService.deleteRole(id);
  }
}