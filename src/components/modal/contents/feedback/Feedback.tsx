'use client'
import { Button, Field, Heading } from '@/components/atoms'
import s from './styles.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { fetchFeedback } from '@/shared/api/fetchFeedback'

interface FormProps {
  name: string
  phone: string
}

export const Feedback = () => {
  const { register, setValue, formState, handleSubmit } = useForm<FormProps>({ defaultValues: {} })
  const { errors, isLoading } = formState
  const submit: SubmitHandler<FormProps> = async data => {
    fetchFeedback(data).then(response => {
      console.log(data)
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
        </div>
        <Button className={s.button} type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  )
}
