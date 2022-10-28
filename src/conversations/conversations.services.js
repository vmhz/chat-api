
const conversationsControllers = require('./conversations.controllers')

const getAllConversations = (req, res) => {
  conversationsControllers.getAllConversations()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


const createConversation = (req, res) => {
  //? id del usuario loggeado
  const createdBy = req.user.id;

  const { title, imageUrl } = req.body
  if (createdBy && title && imageUrl) {
    conversationsControllers.createConversation({
      createdBy, title, imageUrl,
    })
      .then(data => {
        const { id, senderBy, conversationId, message, } = data
        res.status(201).json({ id, senderBy, conversationId, message })
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        title: '...title',
        imageUrl: '...imageUrl',
      }
    })
  }

}

const getConversationById = (req, res) => {
  const { id } = req.params
  conversationsControllers.getConversationById(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}


/* const newConversationByMessage = (req, res) => {
  const { id } = req.user
  const { message } = req.body
  if (data) {
     create
      .then(response => (
        res.status().json(response)
      ))
      .catch(err => (
        res.status(400).json({ message: err.message })
      ))
  }
} */


module.exports = {
  createConversation,
  getAllConversations,
  getConversationById
}
