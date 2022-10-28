
const router = require('express').Router()
const passport = require('passport')

const participantsServices = require('./participants.services')
require('../middlewares/auth.middleware')(passport)


router.route('/participants')
  .get(participantsServices.getAllParticipants)
  .post(
    passport.authenticate('jwt', { session: false }),
    participantsServices.createParticipant
  )




module.exports = router