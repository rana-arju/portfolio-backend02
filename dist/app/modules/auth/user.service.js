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
exports.UserServices = void 0;
const user_schema_1 = require("./user.schema");
const userRegistrationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_schema_1.User.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email });
    if (userExist) {
        throw new Error('This user already exist');
    }
    const result = yield user_schema_1.User.create(payload);
    return result;
});
const userLoginIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_schema_1.User.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email });
    if (!userExist) {
        throw new Error('This user not exist');
    }
    const result = yield user_schema_1.User.findOne({ email: payload.email });
    return result;
});
exports.UserServices = {
    userRegistrationIntoDB,
    userLoginIntoDB,
};
