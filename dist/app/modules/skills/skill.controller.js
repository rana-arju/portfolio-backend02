"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSkills = exports.addNewSkills = void 0;
const skill_model_1 = require("./skill.model");
const mongoose_1 = require("mongoose");
const addNewSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = req.body;
        const { id } = req.params;
        // Check if the id is a valid ObjectId
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            res.status(400).json({
                success: false,
                message: 'Invalid ID format',
            });
        }
        // Convert id to ObjectId
        const objectId = new mongoose_1.Types.ObjectId(id);
        // Update the document
        const result = yield skill_model_1.Skill.findOneAndUpdate({ _id: objectId }, { $set: skills }, { new: true });
        if (!result) {
            res.status(404).json({
                success: false,
                message: 'Skill not found',
            });
        }
        // Send response
        res.status(200).json({
            success: true,
            message: 'New Skills added successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error,
        });
    }
});
exports.addNewSkills = addNewSkills;
const getAllSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // will call service func to send this data
        const result = yield skill_model_1.Skill.find();
        // send response
        res.status(200).json({
            success: true,
            message: 'Skills get succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Someting went wrong',
            error,
        });
    }
});
exports.getAllSkills = getAllSkills;
