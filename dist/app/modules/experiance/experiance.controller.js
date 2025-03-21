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
exports.ExperianceController = void 0;
const experiance_service_1 = require("./experiance.service");
const createExperiance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = req.body;
        // will call service func to send this data
        const result = yield experiance_service_1.ExperianceServices.createExperianceIntoDB(project);
        // send response
        res.status(201).json({
            success: true,
            message: 'Experiance is added succesfull',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Someting went wrong',
            error,
        });
    }
});
const updateExperiance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { id } = req.params;
        console.log(data, id);
        // will call service func to send this data
        const result = yield experiance_service_1.ExperianceServices.updateExperianceIntoDB(data, id);
        // send response
        res.status(200).json({
            success: true,
            message: 'Experiance is update succesfull',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Someting went wrong',
            error,
        });
    }
});
const getAllExperiance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // will call service func to send this data
        const result = yield experiance_service_1.ExperianceServices.getAllExperianceFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: 'Experiance get succesfully',
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
const getExperiance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // will call service func to send this data
        const result = yield experiance_service_1.ExperianceServices.getExperianceFromDB(id);
        // send response
        res.status(200).json({
            success: true,
            message: 'Experiance get succesfully',
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
// student delete
const deleteExperiance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // will call service func to send this data
        const result = yield experiance_service_1.ExperianceServices.deleteExperianceFromDB(id);
        // send response
        res.status(200).json({
            success: true,
            message: 'Experiance deleted succesful',
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
exports.ExperianceController = {
    createExperiance,
    getAllExperiance,
    getExperiance,
    deleteExperiance,
    updateExperiance,
};
