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
    technologies: z
      .string({
        required_error: 'Which technologys use this project?',
      })
      .array(),
    frontend: z.string(),
    server: z.string(),
    description: z.string(),
    live: z.string(),
    deadline: z.string().optional(),
  }),
});

export const projectValidation = {
  projectValidationSchema,
};
