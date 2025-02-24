import { z } from "zod";

export const updateProfileSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  name: z.string().min(2, { message: "Enter a valid name" }),
  phoneNumber: z.string().min(3, { message: "Enter a valid Phone number" }),
  image: z
    .custom<File>((file) => file instanceof File, {
      message: "Please upload a valid image",
    })
    .refine((file) => file.size < 5 * 1024 * 1024, {
      message: "Image size should be less than 5MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPG and PNG are allowed",
    })
    .optional(),
});

export type TUpdateProfileSchema = z.infer<typeof updateProfileSchema>;
