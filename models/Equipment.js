const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Equipment extends Model {}

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
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
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
        staff_id: {
            type: DataTypes.INTEGER,
            references: {
                //'id' from Staff model
                model: 'staff',
                key: 'id'
            }
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
    modelName: 'comment'
    }
);

module.exports = Comment;