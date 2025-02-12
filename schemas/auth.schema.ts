import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(3, { message: "Enter a valid password" }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(3, { message: "Enter a valid password" }),
  name: z.string().min(2, { message: "Enter a valid name" }),
  phoneNumber: z.string().min(3, { message: "Enter a valid Phone number" }),
  role: z.enum(["SELLER", "BUYER"]),
});

export type TloginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
