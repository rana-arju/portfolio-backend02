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
exports.ExperianceServices = void 0;
const experiance_schema_1 = require("./experiance.schema");
const createExperianceIntoDB = (ExperianceData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = experiance_schema_1.Experiance.create(ExperianceData);
    return result;
});
const updateExperianceIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const experianceExist = yield experiance_schema_1.Experiance.findById(id);
    if (!experianceExist) {
        throw new Error('This experiance not exist!');
    }
    const result = yield experiance_schema_1.Experiance.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const getAllExperianceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experiance_schema_1.Experiance.find();
    return result;
});
const getExperianceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experiance_schema_1.Experiance.findOne({ _id: id });
    return result;
});
const deleteExperianceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experiance_schema_1.Experiance.deleteOne({ _id: id });
    return result;
});
exports.ExperianceServices = {
    createExperianceIntoDB,
    getAllExperianceFromDB,
    getExperianceFromDB,
    deleteExperianceFromDB,
    updateExperianceIntoDB,
};
