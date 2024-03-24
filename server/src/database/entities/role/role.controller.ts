import { Controller, Post, Get, Put, Delete, Body,Param } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: any) {
    return this.roleService.createRole(createRoleDto);
  }

  @Get()
  async findAllRole() {
    return this.roleService.findAllRole();
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