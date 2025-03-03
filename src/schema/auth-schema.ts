import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(1).max(50),
  password: z.string().min(6).max(50),
});

export const registerSchema = z
  .object({
    fullname: z.string().min(1, "Ismni kiriting").max(50, "Ism juda uzun"),
    phone: z
      .string()
      .min(1, "Telefon raqamni kiriting")
      .max(50, "Telefon raqam juda uzun"),
    password: z
      .string()
      .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
      .max(50),
    confirmPassword: z.string().min(6, "Parolni qayta kiriting").max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar bir xil emas",
    path: ["confirmPassword"],
  });

export const resetPasswordSchema = z
  .object({
    phone: z
      .string()
      .min(1, "Telefon raqamni kiriting")
      .max(50, "Telefon raqam juda uzun"),
    password: z
      .string()
      .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
      .max(50),
    confirmPassword: z.string().min(6, "Parolni qayta kiriting").max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar bir xil emas",
    path: ["confirmPassword"],
  });
