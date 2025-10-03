import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre es demasiado largo" }),
  email: z
    .string()
    .min(1, { message: "El correo es requerido" })
    .email({ message: "Correo inválido" }),
  reason: z
    .string()
    .min(1, { message: "Debes seleccionar un motivo" }),
  message: z
    .string()
    .min(5, { message: "El mensaje debe tener al menos 5 caracteres" })
    .max(1000, { message: "El mensaje es demasiado largo" }),
});

export type ContactForm = z.infer<typeof contactSchema>;
