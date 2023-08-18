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
            type: DataTypes.STRING,
            allowNull: false,
        },
        serial_num: {
            type: DataTypes.STRING,
        },
        price: {
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
        // ticket_id: {
        //     type: DataTypes.ARRAY(DataTypes.INTEGER),
        //     references: {
        //         model: 'equipmentTicket',
        //         key: 'ticket_id'
        //     }
        // },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'equipment'
}
);

module.exports = Equipment;