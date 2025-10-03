import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Correo inválido'),
  reason: z.enum(['info', 'sponsor', 'join', 'other']),

  message: z.string().min(10, 'Cuéntanos un poco más'),
})
export type ContactForm = z.infer<typeof contactSchema>
