"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experiancetValidation = void 0;
const zod_1 = require("zod");
const experianceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title must be provided and must be a string',
        })
            .min(4)
            .max(50),
        company: zod_1.z
            .string({
            required_error: 'Company must be provided and must be a string',
        })
            .array(),
        technologies: zod_1.z
            .string({
            required_error: 'Which technologys use this company?',
        })
            .array(),
        location: zod_1.z.string({
            required_error: 'Location must be provided and must be a string',
        }),
        period: zod_1.z.string({
            required_error: 'Period must be provided and must be a string',
        }),
        description: zod_1.z
            .string({
            required_error: 'Description must be provided and must be a string',
        })
            .array(),
    }),
});
exports.experiancetValidation = {
    experianceValidationSchema,
};
