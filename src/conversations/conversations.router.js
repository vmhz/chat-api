
const router = require('express').Router()
const passport = require('passport')

const conversationsServices = require('./conversations.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
  .get(
    passport.authenticate('jwt', { session: false }),
    conversationsServices.getAllConversations)
  .post(
    passport.authenticate('jwt', { session: false }),
    conversationsServices.createConversation
  )

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }),
    conversationsServices.getConversationById)


const participantsServices = require('../participants/participants.services')
router.route('/:conversationId/participants')
  .get(participantsServices.getAllParticipants)
  .post(participantsServices.createParticipant)


const messagesServices = require('../messages/messages.services')

router.route('/:conversationId/messages')
  .get(messagesServices.getAllMessagesByConversationId)
  .post(
    passport.authenticate('jwt', { session: false }),
    messagesServices.createMessageByConversationId)

router.route('/:conversationId/messages/:messageId')
  .get(messagesServices.getMessageById)

module.exports = router