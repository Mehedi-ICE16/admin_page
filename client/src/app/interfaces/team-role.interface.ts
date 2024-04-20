export interface ITeamRole {
    id?: number;
    role_id?: number;
    team_id?: number;
    isAuthor: boolean;
    access: string;
    sequence: number;
}