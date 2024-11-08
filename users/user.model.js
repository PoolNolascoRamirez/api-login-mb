const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: String, required: true },
    verified: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);

// Crear el modelo y especificar la colección 'userstest'
// module.exports = mongoose.model('User', schema, 'userstest');