const db = require('../utils/database')
const { DataTypes, TIME } = require('sequelize')

const Conversations = db.define('conversations', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.UUID,
    field: 'created_by',
    allowNull: false
  }, 
  disabledBy: {
    type: DataTypes.UUID,
    field: 'disabled_by',
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    field: 'image_url',
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: true,
  }
})
module.exports = Conversations

