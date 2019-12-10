const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String, // alterar para tipo Date
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // referência de qual model é o objeto
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking',BookingSchema);
