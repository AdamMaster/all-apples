import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/utils/mail.utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body

      const sender = {
        name: 'My App',
        address: 'no-reply@example.com'
      }

      const receipients = [
        {
          name: name || 'Recipient',
          address: email // Ваша действительная почта здесь
        }
      ]

      const result = await sendEmail({
        sender,
        receipients,
        subject: subject || 'Welcome to our website!',
        message: message || 'You are welcome to our platform'
      })

      res.status(200).json({
        accepted: result.accepted
      })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'Unable to send email at this time' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
