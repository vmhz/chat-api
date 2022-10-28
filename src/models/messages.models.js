const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Mesagges = db.define('mesagges', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  senderBy: {
    type: DataTypes.UUID,
    filed: 'sender_by',
    allowNull: false,
    references: {
        key: 'id',
        model: Users
    }
  }, 
  conversationId: {
    type: DataTypes.UUID,
    filed: 'conversation_id',
    allowNull: false,
    references: {
        key: 'id',
        model: Conversations
    }
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    filed: 'created_at',
    allowNull: false
  },
  disabledAt: {
    type: DataTypes.DATE,
    filed: 'disabled_at',
    allowNull: true
  },
})
module.exports = Mesagges

