'use client'
import s from './styles.module.css'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { useStoreModal } from '@/store'
import { fetchOrder } from '@/shared/api/fetchOrder'
import { Button, Checkbox, Field, Heading } from '@/components/ui'
import { orderFormSchema, OrderFormValues } from './order-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Thanks } from '../thanks/Thanks'

export const Order = () => {
  const { setOpen, setClose } = useStoreModal()
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      agreement: false
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = async (data: OrderFormValues) => {
    setIsLoading(true)
    fetchOrder(data).then(() => {
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
            <Field name='city' placeholder='Город' />
          </div>
          <Button className={s.button} color='yellow' type='submit' isLoading={isLoading}>
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
