interface FormData {
  name: string
  phone: string
  message: string
}

export const fetchFeedback = async (data: FormData) => {
  const message = `
      Имя: ${data.name} <br>
      Телефон: ${data.phone} <br>
      Сообщение: ${data.message}
    `

  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Обратный звонок',
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
