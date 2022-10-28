const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING({ length: 20 }),
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING({ length: 20 }),
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING({ length: 32 }),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(16), // +52 
    allowNull: false,
    unique: true
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'normal'
  },
  country: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_verified',
    defaultValue: false
  },
  profileImage: {
    type: DataTypes.STRING,
    field: 'profile_image',
    allowNull: true
  },
  // updatedAt: {
  //   type: DataTypes.TIME,
  //   field: 'updated_at',
  //   allowNull: true
  // },
});

module.exports = Users