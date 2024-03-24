import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { employee } from '../employee/employee.model';

@Table ({
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent table name changes
})

export class employee_stats extends Model<employee_stats> {
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
    })
    workflow_id: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    role_id: string;

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
        type: DataTypes.STRING
    })
    time_allotted: string;

    @Column({
        type: DataTypes.STRING
    })
    error_count: string;

    @ForeignKey(() => employee)
    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    employee_id: string;
  
    @BelongsTo(() => employee)
    employee: employee;
}