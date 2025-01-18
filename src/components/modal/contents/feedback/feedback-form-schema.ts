import { z } from 'zod'

export const feedbackFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  message: z.string(),
  agreement: z.boolean().refine(val => val, { message: 'Вы должны согласиться с условиями' })
})

export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>
