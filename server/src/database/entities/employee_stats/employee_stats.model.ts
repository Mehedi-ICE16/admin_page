import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Employee } from '../employee/employee.model';

@Table ({
    timestamps: false, // Disable timestamps
    tableName: 'employee_stats',
    freezeTableName: true, // Prevent table name changes
})

export class EmployeeStats extends Model<EmployeeStats> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    })
    id: number;

    @Column({
        allowNull: false,
    })
    workflow_id: number;

    @Column({
        allowNull: false,
    })
    role_id: number;

    @Column({
        type: DataTypes.DATE,
        allowNull: false,
    })
    start_timestamp: Date;

    @Column({
        type: DataTypes.DATE,
    })
    end_timestamp: Date;

    @Column({
        type: DataTypes.DATE
    })
    time_allotted: Date;

    @Column({
        allowNull: true,
    })
    error_count: number;

    @ForeignKey(() => Employee)
    @Column({
        allowNull: false
    })
    employee_id: number;
  
    @BelongsTo(() => Employee)
    employee: Employee;
}