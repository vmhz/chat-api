
const participantsControllers = require('./participants.controllers')

const getAllParticipants = (req, res) => {
  const { conversation_id } = req.params
  console.log('conversation id')
  console.log(conversation_id)
  res.status(200).json({ conversation_id })
  /* participantsControllers.getAllParticipants(conversation_id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    }) */
}


const createParticipant = (req, res) => {
  //? Este es el id del usuario loggeado
  const { conversationId } = req.params
  const { userId, addedBy } = req.body
  if (userId && addedBy) {
    participantsControllers.createParticipant(
      { userId, conversationId, addedBy })
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
        userId: 'uuid',
        addedBy: 'uuid'
      }
    })
  }

}

/* const getParticipantById = (req, res) => {
  const id = req.body
  participantsControllers.getParticipantsByCategory(categoryId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}
 */



module.exports = {
  createParticipant,
  getAllParticipants,
  // getParticipantById
}
