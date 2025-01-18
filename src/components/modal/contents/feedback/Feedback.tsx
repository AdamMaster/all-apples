'use client'

import s from './styles.module.css'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { fetchFeedback } from '@/shared/api/fetchFeedback'
import { useStoreModal } from '@/store'
import React, { useState } from 'react'
import { Thanks } from '../thanks/Thanks'
import { Button, Checkbox, Field, Heading, Textarea } from '@/components/ui'
import { feedbackFormSchema, FeedbackFormValues } from './feedback-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const Feedback = () => {
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      agreement: false
    }
  })
  const { setOpen, setClose } = useStoreModal()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsLoading(true)
    fetchFeedback(data).then(() => {
      setIsLoading(false)
      setOpen(<Thanks />)
      setTimeout(() => {
        setClose()
      }, 2000)
    })
  }

  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={s.wrapper}>
      <Heading className={s.title} level='h3'>
        Оставить заявку
      </Heading>
      <FormProvider {...form}>
        <form className={s.form} onSubmit={form.handleSubmit(onSubmit)}>
          <div className='fields'>
            <Field name='name' placeholder='Имя' />
            <Field name='phone' placeholder='Телефон' mode='phone' />
            <Field name='email' placeholder='Email' />
            <Textarea name='message' placeholder='Сообщение' />
          </div>
          <Button className={s.button} type='submit' disabled={isLoading} isLoading={isLoading}>
            Отправить
          </Button>
          <Checkbox
            className={s.agreement}
            name='agreement'
            isChecked={isChecked}
            text='Я согласен на обработку персональных данных'
            onClick={() => handleClickCheckbox()}
          />
        </form>
      </FormProvider>
    </div>
  )
}
