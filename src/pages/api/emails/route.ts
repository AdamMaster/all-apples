import { sendEmail } from '@/utils/mail.utils'

export async function POST() {
  const sender = {
    name: 'My App',
    address: 'no-reply@example.com'
  }

  const receipients = [
    {
      name: 'John Doe',
      address: 'john.doe@example.com'
    }
  ]

  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: 'Welcome to our websites!',
      message: 'Your are welcome to our platform'
    })

    return Response.json({
      accepted: result.accepted
    })
  } catch (error) {
    Response.json({ message: 'Unable to send email this time' }, { status: 500 })
  }
}
