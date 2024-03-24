import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { employee } from '../employee/employee.model';

@Table ({
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent table name changes
})

export class employee_login extends Model<employee_login> {
    @Column({
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    })
    id: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    password: string;

    @ForeignKey(() => employee)
    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    employee_id: string;
  
    @BelongsTo(() => employee)
    employee: employee;
}