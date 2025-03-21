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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const auth_utils_1 = require("./auth.utils");
const user_schema_1 = require("./user.schema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRegistrationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_schema_1.User.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email });
    if (userExist) {
        throw new Error('This user already exist');
    }
    const result = yield user_schema_1.User.create(payload);
    return result;
});
const userLoginIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = payload;
    const userExist = yield user_schema_1.User.findOne({ email }).select('+password');
    if (!userExist) {
        throw new Error("creadentials doesn't match");
    }
    console.log('password', password);
    // Validate password
    const isMatch = yield bcrypt_1.default.compare(password, userExist.password);
    console.log(isMatch);
    if (!isMatch) {
        throw new Error("creadentials doesn't match");
    }
    const jwtPayload = {
        email: userExist === null || userExist === void 0 ? void 0 : userExist.email,
        role: userExist === null || userExist === void 0 ? void 0 : userExist.role,
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    const refreshToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.UserServices = {
    userRegistrationIntoDB,
    userLoginIntoDB,
};
