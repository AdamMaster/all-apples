interface FormData {
  name?: string
  phone?: string
  city?: string
  agreement: boolean
}

export const fetchOrder = async (data: FormData) => {
  const message = `
      Имя: ${data.name} <br>
      Телефон: ${data.phone}<br>
      Город: ${data.city}<br>
    `

  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Заказ',
        message: message
      })
    })
    if (response.ok) {
      console.log('Письмо отправилось успешно')
    } else {
      console.error('Ошибка при отправке письма:', response.status, response.statusText)
    }
  } catch (error) {
    console.log('Письмо не отправилось:', error)
  }
}
