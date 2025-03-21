"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiance = void 0;
const mongoose_1 = require("mongoose");
const ExperianceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    technologies: {
        type: [String],
        required: [true, 'Technology is required.'],
    },
    period: {
        type: String,
    },
    description: {
        type: [String],
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
}, { timestamps: true });
// Create the model
exports.Experiance = (0, mongoose_1.model)('Experiance', ExperianceSchema);
