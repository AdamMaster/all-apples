'use client'
import s from './styles.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import React, { FC, useEffect, useState } from 'react'
import { useStoreModal } from '@/store'
import { fetchOrder } from '@/shared/api/fetchOrder'
import { Thanks } from '../thanks/Thanks'
import { Button, Checkbox, Field, Heading, Logo } from '@/components/ui'

interface FormProps {
  name?: string
  phone?: string
  city?: string
  productName: string
  agreement: string
}

interface Props {
  productFullName: string
}

export const Order: FC<Props> = ({ productFullName }) => {
  const { setOpen, setClose } = useStoreModal()
  const { register, setValue, formState, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      productName: productFullName
    }
  })
  const { errors } = formState
  const [isLoading, setIsLoading] = useState(false)
  const submit: SubmitHandler<FormProps> = async data => {
    setIsLoading(true)
    fetchOrder(data).then(() => {
      setIsLoading(false)
      setOpen(<Thanks />)
      setTimeout(() => {
        setClose()
      }, 2000)
    })

    console.log(data)
  }

  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={s.wrapper}>
      <Heading className={s.title} level='h3'>
        Оставьте заявку
      </Heading>
      <div className={s.subtitle}>мы перезвоним вам в течение часа</div>
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
          <Field
            className={`${s.field} ${errors.city ? 'not-valid' : ''}`}
            id='city'
            placeholder='Город'
            {...register('city', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('city', value)
            }}
          />
          <Field
            className={s.field}
            id='product-name'
            label='Наименование продукта'
            {...register('productName')}
            readOnly={true}
          />
        </div>
        <Button className={s.button} color='yellow' type='submit' isLoading={isLoading}>
          Отправить
        </Button>
        <Checkbox
          className={s.agreement}
          isChecked={isChecked}
          text='Я согласен на обработку персональных данных'
          {...register('agreement', {
            required: {
              value: true,
              message: 'Вы должны согласиться на обработку персональных данных'
            }
          })}
          onClick={() => handleClickCheckbox()}
        />
      </form>
    </div>
  )
}
