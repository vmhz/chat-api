
    const contactsControllers = require('./contacts.controller')

const getAllContacts = (req, res) => {
    contactsControllers.getAllContacts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const createContact = (req, res) => {
    //? Este es el id del usuario loggeado
    const userId = req.user.id 
    
    const { requires } = req.body
    if(requires){
        contactsControllers.createContact({requires})
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

            }
        })
    }

}

const getContactById = (req, res) => {
    const id = req.body
    contactsControllers.getContactsByCategory(categoryId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}




module.exports = {
    createContact,
    getAllContacts,
    getContactById
}
