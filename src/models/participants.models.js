const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Participants = db.define('participants', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    field: 'user_id',
    allowNull: false,
    references: {
      key: 'id',
      model: Users
  }
  },
  conversationId: {
    type: DataTypes.UUID,
    field: 'conversation_id',
    allowNull: false,
    references: {
      key: 'id',
      model: Conversations
  }
  },
  addedBy: {
    type: DataTypes.UUID,
    field: 'added_by',
    allowNull: true
  },
  removedBy: {
    type: DataTypes.UUID,
    field: 'removed_by',
    allowNull: true
  },
})
module.exports = Participants