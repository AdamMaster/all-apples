import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    try {
      const { subject, message } = request.body

      const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        }
      })

      const mailOptions = {
        from: '"Опт-Рынок" <no-reply@yourdomain.com>',
        to: process.env.EMAIL,
        subject: 'Узнать цену',
        html: message
      }

      await transporter.sendMail(mailOptions)

      response.status(200).json({ message: 'Письмо успешно отправлено' })
    } catch (error: any) {
      console.error('Ошибка при отправке письма:', error)
      response.status(500).json({ message: 'Письмо не отправилось', error: error.message })
    }
  } else {
    response.status(405).json({ message: 'Метод не поддерживается' })
  }
}
