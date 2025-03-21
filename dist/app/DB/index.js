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
const user_schema_1 = require("../modules/auth/user.schema");
const superUser = {
    email: 'ranaarju20@gmail.com',
    name: 'Rana Arju',
    password: 'r@n@&@rju2@25',
    needsPasswordChange: false,
    status: 'in-progress',
    role: 'superAdmin',
    isDeleted: false,
};
const seedSuperAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    // when database connected, then we check super admin exist or not, if not exist then we create super admin automatically base on provided data
    const isSuperAdminExist = yield user_schema_1.User.findOne({ role: 'superAdmin' });
    if (!isSuperAdminExist) {
        yield user_schema_1.User.create(superUser);
    }
});
exports.default = seedSuperAdmin;
