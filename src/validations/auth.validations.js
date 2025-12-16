import { email, z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1).max(255).trim(),
  email: email().max(255).trim().toLowerCase(),
  password: z.string().min(6).max(128),
  role: z.enum(['admin', 'user']).default('user'),
});

export const signInSchema = z.object({
  email: email().max(255).trim().toLowerCase(),
  password: z.string().min(6).max(128),
});
