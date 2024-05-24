interface FormData {
  name: string
  phone: string
}

export const fetchFeedback = async (data: FormData) => {
  const message = `
      Имя: <b>${data.name}</b> <br>
      Телефон: <b>${data.phone}</b>
    `
  const response = await fetch('/api/feedback/route', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  })
}
