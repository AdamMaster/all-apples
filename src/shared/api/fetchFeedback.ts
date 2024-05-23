interface FeedbackData {
  name: string
  phone: string
}

interface FetchFeedbackResponse {
  success: boolean
  message: string
  data?: any // Дополнительно, если есть какие-то данные, возвращаемые сервером
}

export const fetchFeedback = async (data: FeedbackData): Promise<FetchFeedbackResponse> => {
  try {
    const response = await fetch('/api/emails/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      // Если сервер вернул статус ошибки, создаем объект ошибки с деталями
      return {
        success: false,
        message: `Ошибка сервера: ${response.statusText}`
      }
    }

    // Предположим, что сервер возвращает JSON
    const result = await response.json()
    return {
      success: true,
      message: 'Письмо успешно отправлено',
      data: result
    }
  } catch (error) {
    // Обработка ошибок сети и других исключений
    return {
      success: false,
      message: `Произошла ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
    }
  }
}
