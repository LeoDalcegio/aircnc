const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        // busca a string tech dentro do array de todos os spots e retorna apenas os spots dessa tech
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){
        const {filename} = req.file;
        const {company, techs, price} = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // separador das strings ',' trim remove espaços
            price
        });

        return res.json(spot);
    }
}
