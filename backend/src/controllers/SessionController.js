const User = require('../models/User.js');

// index "(get)", show "(get/id)", store, update, destroy

module.exports = {
    async store(req, res){
        const { email } = req.body; // é o mesmo que const  email = req.body.email;

        let user = await User.findOne({ email }).catch(err => {console.log(err)});
        
        if (!user){
            user = await User.create({ email }).catch(err => {console.log(err)});
        }
        
        return res.json(user);
    }
}
