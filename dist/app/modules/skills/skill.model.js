"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
// Define the Skills schema
// Since we're storing skills as an array of strings, we'll create a simple schema
const skillsSchema = new mongoose_1.Schema({
    skills: {
        type: [String],
        default: [],
    },
}, { timestamps: true });
exports.Skill = (0, mongoose_1.model)('Skill', skillsSchema);
