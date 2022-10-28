const uuid = require('uuid')
const Conversations = require('../models/conversations.models')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')


const getAllParticipants = async (conversationId) => {
  const data = await Participants.findAll({
    where: {
      conversation_id: conversationId
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
    ]
  })
  return data
}


const createParticipant = async (data) => {

  const response = await Participants.create({
    id: uuid.v4(),
    ...{
      userId,
      conversationId,
      addedBy,
      // removedBy
    } = data
  })
  return response
}


module.exports = {
  getAllParticipants,
  // getParticipantById,
  createParticipant,
}

