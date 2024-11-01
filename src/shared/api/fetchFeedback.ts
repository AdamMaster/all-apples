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
  if (!response.ok) {
    console.error('Ошибка при отправке:', await response.text())
  } else {
    const jsonResponse = await response.json()
    console.log('Ответ:', jsonResponse)
  }
}
