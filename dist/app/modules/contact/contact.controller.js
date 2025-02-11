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
exports.messageController = void 0;
const contact_service_1 = require("./contact.service");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactInfo = req.body;
        // will call service func to send this data
        const result = yield contact_service_1.MessageServices.sendMessge(contactInfo);
        // send response
        res.status(201).json({
            success: true,
            message: 'Send Message succesfull',
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
const getAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // will call service func to send this data
        const result = yield contact_service_1.MessageServices.getAllMessageFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: 'Messages get succesfully',
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
exports.messageController = {
    createMessage,
    getAllMessages,
};
