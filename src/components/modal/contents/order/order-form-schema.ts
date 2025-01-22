import { z } from 'zod'

export const orderFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  city: z.string().min(2, { message: 'Название должно содержать не менее 2-х символов' }),
  agreement: z.boolean().refine(val => val, { message: 'Вы должны согласиться с условиями' })
})

export type OrderFormValues = z.infer<typeof orderFormSchema>
