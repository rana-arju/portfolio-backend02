"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = void 0;
const zod_1 = require("zod");
const projectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title must be provided and must be a string',
        })
            .min(4)
            .max(50),
        images: zod_1.z
            .string({
            required_error: 'Proejct Screnshots must be provided and must be a string',
        })
            .array(),
        technologies: zod_1.z
            .string({
            required_error: 'Which technologys use this project?',
        })
            .array(),
        frontend: zod_1.z.string(),
        server: zod_1.z.string(),
        description: zod_1.z.string(),
        live: zod_1.z.string(),
        deadline: zod_1.z.string().optional(),
    }),
});
exports.projectValidation = {
    projectValidationSchema,
};
