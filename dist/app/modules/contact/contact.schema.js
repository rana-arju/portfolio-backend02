"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    message: {
        type: String,
        required: [true, 'Message is required.'],
    },
    email: {
        type: String,
        required: [true, 'email required!'],
    },
    subject: { type: String, required: true },
}, { timestamps: true });
// Query middleware
contactSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
contactSchema.pre('findOne', function (next) {
    this.findOne({ isDeleted: { $ne: true } });
    next();
});
// Create the model
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
