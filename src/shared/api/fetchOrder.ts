interface FormData {
  name?: string
  phone?: string
  city?: string
  productName: string
}

export const fetchOrder = async (data: FormData) => {
  const message = `
      Имя: <b>${data.name}</b> <br>
      Телефон: <b>${data.phone}</b><br>
      Город: <b>${data.city}</b> <br>
      Наименование товара: <b>${data.productName}</b> <br>
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
