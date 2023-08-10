// mapping table for students and equipment rented out to those students

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StudentEquipment extends Model {}

StudentEquipment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Student
                model: 'student',
                key: 'id'
            }
        },
        equipment_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Equipment
                model: 'equipment',
                key: 'id'
            }
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'StudentEquipment'
    }
);

module.exports = StudentEquipment;