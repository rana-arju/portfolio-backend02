"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    images: { type: [String], required: true },
    technologies: {
        type: [String],
        required: [true, 'Technology is required.'],
    },
    frontend: {
        type: String,
    },
    server: {
        type: String,
    },
    description: {
        type: String,
    },
    live: {
        type: String,
    },
    deadline: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'high',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// Query middleware
projectSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
projectSchema.pre('findOne', function (next) {
    this.findOne({ isDeleted: { $ne: true } });
    next();
});
// Create the model
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
