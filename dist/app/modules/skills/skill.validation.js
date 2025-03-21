"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkillSchema = exports.updateSkillsSchema = void 0;
const z = __importStar(require("zod"));
// Validation schema for updating the entire skills array
const updateSkillsSchema = z.object({
    skills: z
        .array(z
        .string()
        .min(1, 'Skill name cannot be empty')
        .max(50, 'Skill name cannot exceed 50 characters')
        .trim())
        .max(100, 'Cannot have more than 100 skills')
        .optional() // Make it optional to allow partial updates
        .refine((skills) => new Set(skills).size === skills.length, {
        message: 'Duplicate skills are not allowed',
    }),
});
exports.updateSkillsSchema = updateSkillsSchema;
// Validation schema for adding a single skill
const addSkillSchema = z.object({
    skills: z
        .string()
        .min(1, 'Skill name cannot be empty')
        .max(50, 'Skill name cannot exceed 50 characters')
        .trim(),
});
exports.addSkillSchema = addSkillSchema;
