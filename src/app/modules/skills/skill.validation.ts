import * as z from 'zod';

// Validation schema for updating the entire skills array
const updateSkillsSchema = z.object({
  skills: z
    .array(
      z
        .string()
        .min(1, 'Skill name cannot be empty')
        .max(50, 'Skill name cannot exceed 50 characters')
        .trim(),
    )
    .max(100, 'Cannot have more than 100 skills')
    .optional() // Make it optional to allow partial updates
    .refine((skills) => new Set(skills).size === skills!.length, {
      message: 'Duplicate skills are not allowed',
    }),
});

// Validation schema for adding a single skill
const addSkillSchema = z.object({
  skills: z
    .string()
    .min(1, 'Skill name cannot be empty')
    .max(50, 'Skill name cannot exceed 50 characters')
    .trim(),
});

export { updateSkillsSchema, addSkillSchema };
