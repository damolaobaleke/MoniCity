const admin = require('firebase-admin');


const db = admin.firestore();

module.exports = {
    contactController: (req, res) => {
        res.render('contact/Contact')
    },

    storeUserInformation: async(req, res) => {
        console.log(req.body.contact);

        const docRef = db.collection('users').doc()

        try {
            await docRef.set({
                name: req.body.contact.name,
                email: req.body.contact.email,
                purpose: req.body.contact.purpose,
                message: req.body.contact.message
            });

        } catch (err) {
            console.log(err)
            req.flash("error_message", err)
        }

        req.flash("success_message", "Submited Successfully")
        res.redirect('/')
    }
}