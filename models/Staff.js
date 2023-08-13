const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Staff extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Added to restrict some functionality to only 'Admin' users
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    school_id: {
      type: DataTypes.INTEGER,
      references: {
        //'id' from School
        model: 'school',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  }, {
  hooks: {
    beforeCreate: async (newStaffData) => {
      newStaffData.password = await bcrypt.hash(newStaffData.password, 10);
      return newStaffData;
    },
    beforeUpdate: async (updatedStaffData) => {
      updatedStaffData.password = await bcrypt.hash(updatedStaffData.password, 10);
      return updatedStaffData;
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'staff'
}
);

module.exports = Staff;