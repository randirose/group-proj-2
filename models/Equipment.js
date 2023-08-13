const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Equipment extends Model { }

Equipment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        asset_name: {
            type: DataTypes.STRING
        },
        serial_num: {
            type: DataTypes.STRING,
            // Changed to allow a null value if equipment doesn't have a serial number
            // allowNull: false,
        },
        price: {
            // Added optional parameters to limit to 10 numbers long and always show 2 decimal places
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_checked_out: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Ticket model
                model: 'ticket',
                key: 'id'
            }
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'equipment'
}
);

module.exports = Equipment;