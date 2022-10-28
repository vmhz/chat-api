const Messages = require('./messages.models')
const Users = require('./users.models')
const Participants = require('./participants.models')
const Conversations = require('./conversations.models')

const initModels = () => {
  //* 1 -> M
  //? One message, comes from a user
  Messages.belongsTo(Users)
  //? One user has many messages
  Users.hasMany(Messages)

  //* 1 -> M
  //? One participant, comes from a user
  Participants.belongsTo(Users)
  //? One user has many participants
  Users.hasMany(Participants)

  //* 1 -> M
  //? One message, comes from a conversation
  Messages.belongsTo(Conversations)
  //? One conversation has many messages
  Conversations.hasMany(Messages)

  //* 1 -> M
  //? One participant, comes from a conversation
  Participants.belongsTo(Conversations)
  //? One conversation has many participants
  Conversations.hasMany(Participants)
}

module.exports = initModels