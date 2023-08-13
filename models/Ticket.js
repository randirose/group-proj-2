const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model { }

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
            // sequelize DATE automatically uses the native datatype DATETIME with mysql which has the hour:min:sec
            // Changed datatype to DATEONLY to avoid any complications with the hour:min:sec values
            type: DataTypes.DATEONLY,
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
                //'id' from Staff - should pull in whoever is logged in and creates the ticket
                model: 'staff',
                key: 'id'
            }
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ticket'
}
);

module.exports = Ticket;