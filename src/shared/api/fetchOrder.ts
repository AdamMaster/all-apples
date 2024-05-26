interface FormData {
  name?: string
  phone?: string
  city?: string
  productName: string
}

export const fetchOrder = async (data: FormData) => {
  const message = `
      Имя: ${data.name} <br>
      Телефон: ${data.phone}<br>
      Город: ${data.city}<br>
      Наименование товара: ${data.productName}
    `
  const response = await fetch('/api/order/route', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  })
}
