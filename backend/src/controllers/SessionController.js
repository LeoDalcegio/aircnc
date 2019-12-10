const User = require('../models/User')

// index "(get)", show "(get/id)", store, update, destroy

module.exports = {
    async store(req, res){
        const { email }= req.body; // é o mesmo que const  email = req.body.email;

        let user = await User.findOne({ email });
        
        if (!user){
          user = await User.create({ email })
        }
        
        return res.json(user);
    }
}
