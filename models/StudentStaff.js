// mapping table for students belonging to staff member, belonging to school

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StudentStaff extends Model {}

StudentStaff.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        staff_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Staff
                model: 'staff',
                key: 'id'
            }
        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Student
                model: 'student',
                key: 'id'
            }
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'studentStaff'
    }
);

module.exports = StudentStaff;