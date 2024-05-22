export const fetchFeedback = async (data: any) => {
  const response = await fetch('/api/emails/route', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.text()
}
