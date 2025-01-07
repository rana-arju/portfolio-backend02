import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title must be provided and must be a string',
      })
      .min(4)
      .max(50),

    images: z
      .string({
        required_error:
          'Proejct Screnshots must be provided and must be a string',
      })
      .array(),
    tech: z
      .string({
        required_error: 'Which technologys use this project?',
      })
      .array(),
    frontend: z.string(),
    backend: z.string(),
    details: z.string(),
    live: z.string(),
    deadline: z.string(),
  }),
});

export const projectValidation = {
  projectValidationSchema,
};
