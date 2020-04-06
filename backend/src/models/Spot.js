const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // referência de qual model é o objeto
    }
}, {

    // toda vez que um elemento for convertido em JSON, é para "colorar os virtuals" automaticamente junto no JSON
    toJSON: {
        virtuals: true,
    }
})

// isso não é visto pelo banco, foi feito para retornar junto com a requisição, o caminho das imagens passadas 
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.0.6:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot',SpotSchema)