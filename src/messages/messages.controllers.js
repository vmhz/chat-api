const uuid = require('uuid')
const Conversations = require('../models/conversations.models')
const Messages = require('../models/messages.models')
const Users = require('../models/users.models')


const getAllMessages = async (offset, limit) => {
  const data = await Messages.findAndCountAll({
    offset,
    limit
  })
  return data
}

const getAllMessagesById = async (conversationId) => {
  const data = await Messages.findAndCountAll({
    where: {
      conversationId
    },
    attributes: {
      exclude: ['disabledAt', 'updatedAt', 'userId', 'user']
    }
  })
  return data
}

const getMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id
    }
  })
  return data
}

const createMessage = async (data) => {
  const response = await Messages.create({
    id: uuid.v4(),
    senderBy: data.senderBy,
    conversationId: data.conversationId,
    message: data.message,
    createdAt: data.createdAt,
    // disabledAt: data.disabledAt,
  })
  return response
}



module.exports = {
  getAllMessages,
  getMessageById,
  getAllMessagesById,
  createMessage,
}

