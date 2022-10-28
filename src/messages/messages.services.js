
const messagesControllers = require('./messages.controllers')

const getAllMessages = (req, res) => {
  messagesControllers.getAllMessages()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


const createMessageByConversationId = (req, res) => {
  //? el id del usuario loggeado
  const { conversationId } = req.params
  const senderBy = req.user.id
  const { message } = req.body
  /*   res.status(201).json({
      senderBy
      , conversationId
      , message
    }) */
  if (conversationId && message) {
    messagesControllers.createMessage({
      senderBy, conversationId, message
    })
      .then((data) => {
        const { id, senderBy, conversationId, message } = data
        res.status(201).json({ id, senderBy, conversationId, message })
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        message: 'message'
      }
    })
  }

}
const createMessage = (req, res) => {
  //? el id del usuario loggeado
  const senderBy = req.user.id

  const { conversationId, message } = req.body
  if (conversationId && message) {
    messagesControllers.createMessage({
      senderBy, conversationId, message
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        conversationId,
        message
      }
    })
  }

}

const getMessageById = (req, res) => {
  const { messageId } = req.params
  messagesControllers.getMessageById(messageId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

const getAllMessagesByConversationId = (req, res) => {
  const { conversationId } = req.params
  messagesControllers.getAllMessagesById(conversationId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


module.exports = {
  createMessage,
  createMessageByConversationId,
  getAllMessages,
  getMessageById,
  getAllMessagesByConversationId,
}
