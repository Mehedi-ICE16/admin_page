import { Injectable, Inject } from '@nestjs/common';
import { team } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @Inject('TEAM_REPOSITORY')
    private teamRepository: typeof team,
  ) {}

  async create(createTeamDto: any): Promise<team> {
    return this.teamRepository.create<team>(createTeamDto);
  }

  async findAllTeam(): Promise<any[]> {
    return this.teamRepository.findAll<any>();
  }

  async updateTeam(id: string, updateData: Partial<any>): Promise<void> {
    await this.teamRepository.update(updateData, { where: { id } });
  }

  async deleteTeam(id: string): Promise<void> {
    await this.teamRepository.destroy({ where: { id } });
  }

}  