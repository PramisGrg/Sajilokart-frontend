import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(3, { message: "Enter a valid password" }),
});

export type TloginSchema = z.infer<typeof loginSchema>;
