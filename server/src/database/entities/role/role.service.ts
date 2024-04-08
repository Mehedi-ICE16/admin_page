import { Injectable, Inject } from '@nestjs/common';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}

  async createRole(createRoleDto: any): Promise<Role> {
    return this.roleRepository.create<Role>(createRoleDto);
  }

  async findAllRole(): Promise<any[]> {
    return this.roleRepository.findAll<any>();
  }

  async updateRole(id: string, updateData: Partial<any>): Promise<void> {
    await this.roleRepository.update(updateData, { where: { id } });
  }

  async deleteRole(id: string): Promise<void> {
    await this.roleRepository.destroy({ where: { id } });
  }

}  