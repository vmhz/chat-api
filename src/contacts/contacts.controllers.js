
    const Contacts = require('../models/contacts.models')
    
    
    const getAllContacts = async() => {
    const data = await Contacts.findAll({
        attributes: {
            // exclude: ['', '', '']
         },
        include: []
    })
    return data
}

const getContactById = async(id) => {
    const data = await Contacts.findOne({
        where: {
            id
        },
        attributes: {
            // exclude: ['', '', '']
         },
        include: [
            {
                model: Model,
                as: 'model',
                attributes: ['id', 'firstName', 'lastName', 'email']
            }
        ]
    })
    return data
}

const createContact = async (data) => {
    const response = await Contacts.create({
        
    })
    return response
}


module.exports = {
    getAllContacts,
    getContactById,
    createContact,
}

