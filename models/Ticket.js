const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        equipment_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Equip model
                model: 'equipment',
                key: 'id'
            }
        },
        staff_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Staff
                model: 'staff',
                key: 'id'
            }
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         //'id' from User
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;