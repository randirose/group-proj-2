const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class School extends Model {}

School.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // staff_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         //'id' from Staff
        //         model: 'staff',
        //         key: 'id'
        //     }
        // },
        // student_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         //'id' from Student
        //         model: 'student',
        //         key: 'id'
        //     }
        // },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;