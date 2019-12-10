const Spot = require('../models/Spot')

module.exports = {
    // é show e não index pois está exibindo O DashboardController e não uma lista de "Dashboards" 
    async show(req, res) {
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user});

        return res.json(spots);
    }
}
