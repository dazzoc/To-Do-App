const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: false },
    urgent: { type: Boolean, default: false },
}, { timestamps: true });

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;