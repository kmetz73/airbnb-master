import { z } from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  // firstName: z.string().min(2).max(50),
  firstName: z.string().min(2),
  lastName: z.string().min(2).max(50),
  userName: z.string().max(50),
});

type profileSchema = z.infer<typeof profileSchema>;
