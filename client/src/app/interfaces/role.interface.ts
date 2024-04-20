import { ITeamRole } from "./team-role.interface";

export interface IRole {
    id?: number;
    name: string;
    description: string;
    TeamRole?: ITeamRole
}