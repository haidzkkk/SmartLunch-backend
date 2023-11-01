const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    recipientName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    addressLine: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Auth',
        required: true,
    },
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
