import { z } from 'zod';

const experianceValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title must be provided and must be a string',
      })
      .min(4)
      .max(50),

    company: z
      .string({
        required_error: 'Company must be provided and must be a string',
      })
      .array(),
    technologies: z
      .string({
        required_error: 'Which technologys use this company?',
      })
      .array(),
    location: z.string({
      required_error: 'Location must be provided and must be a string',
    }),
    period: z.string({
      required_error: 'Period must be provided and must be a string',
    }),
    description: z
      .string({
        required_error: 'Description must be provided and must be a string',
      })
      .array(),
  }),
});

export const experiancetValidation = {
 experianceValidationSchema,
};
