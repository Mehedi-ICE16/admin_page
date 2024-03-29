import { Sequelize } from 'sequelize-typescript';
import { department } from './entities/department/department.model';
import { team } from './entities/team/team.model';
import { role } from './entities/role/role.model';
import { employee } from './entities/employee/employee.model';
import { employee_login } from './entities/employee_login/employee_login.model';
import { employee_stats } from './entities/employee_stats/employee_stats.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'ep-wild-cell-a2u0265d.eu-central-1.pg.koyeb.app',
        // host: 'localhost',
        port: 5432,
        username: 'koyeb-adm',
        // username: 'postgres',
        password: '7fWnr6JZyUXe',
        // password: 'bsc16190',
        database: 'koyebdb',
        // database: 'admin',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      });
      sequelize.addModels([
        department,
        team,
        role,
        employee,
        employee_login,
        employee_stats,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
