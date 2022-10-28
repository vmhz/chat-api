const uuid = require('uuid')
const Conversations = require('../models/conversations.models')


const getAllConversations = async () => {
  const data = await Conversations.findAll({
    /* attributes: {
        exclude: ['userId']
     },
    include: [
        {
            model: Users,
            as: 'user',
            attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
            model: Participants,
            as: 'participants'
        }
    ] */
  })
  return data
}

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id
    }
  })
  return data
}

const createConversation = async (data) => {
  const response = await Conversations.create({
    id: uuid.v4(),
    createdBy: data.createdBy,
    // disabledBy: null,
    title: data.title,
    imageUrl: data.imageUrl,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,

  })
  return response
}

getAllConversations().then(res => console.log(res))
module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
}

