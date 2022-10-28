
const router = require('express').Router()
const passport = require('passport')

const contactServices = require('./contacts.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(contactServices.getAllContacts)
    .post(
        passport.authenticate('jwt', {session: false}),
        contactServices.createContact
    )




module.exports = router