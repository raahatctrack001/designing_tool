import { z } from 'zod';

export const signUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email format" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(64, { message: "Password must be at most 64 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" })
    .refine((val) => !/(.)\1{2,}/.test(val), {
      message: "Password should not have three consecutive repeating characters",
    })
    .refine((val) => !/\s/.test(val), {
      message: "Password should not contain spaces",
    }),
});

export const signInSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email format" }),

  password: z
    .string({ required_error: "Password is required" })
})