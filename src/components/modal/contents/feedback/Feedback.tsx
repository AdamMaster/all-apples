'use client'
import { Button, Field, Heading, Textarea } from '@/components/atoms'
import s from './styles.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { fetchFeedback } from '@/shared/api/fetchFeedback'
import { useStoreModal } from '@/store'
import { useState } from 'react'
import { Thanks } from '../thanks/Thanks'

interface FormProps {
  name: string
  phone: string
  message: string
}

export const Feedback = () => {
  const { setOpen, setClose } = useStoreModal()
  const { register, setValue, formState, handleSubmit } = useForm<FormProps>({ defaultValues: {} })
  const { errors } = formState
  const [isLoading, setIsLoading] = useState(false)
  const submit: SubmitHandler<FormProps> = async data => {
    setIsLoading(true)
    fetchFeedback(data).then(() => {
      setIsLoading(false)
      setOpen(<Thanks />)
      setTimeout(() => {
        setClose()
      }, 2000)
    })
  }

  return (
    <div className={s.wrapper}>
      <Heading className={s.title} level='h3'>
        Оставить заявку
      </Heading>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <div className='fields'>
          <Field
            className={`${s.field} ${errors.name ? 'not-valid' : ''}`}
            id='name'
            placeholder='Имя'
            {...register('name', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('name', value)
            }}
          />
          <Field
            className={`${s.field} ${errors.phone ? 'not-valid' : ''}`}
            mode='phone'
            id='phone'
            placeholder='Телефон'
            {...register('phone', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('phone', value)
            }}
          />
          <Textarea
            placeholder='Сообщение'
            {...register('message')}
            onChangeValue={value => {
              setValue('message', value)
            }}
          ></Textarea>
        </div>
        <Button className={s.button} type='submit' disabled={isLoading} isLoading={isLoading}>
          Отправить
        </Button>
      </form>
    </div>
  )
}
