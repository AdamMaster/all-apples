import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { subject, message } = await request.json()

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
      from: '"AdamsApple" <no-reply@yourdomain.com>',
      to: 'test-n8a0r85pr@srv1.mail-tester.com',
      subject: subject,
      html: message
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Письмо успешно отправлено' }, { status: 200 })
  } catch (error: any) {
    console.error('Ошибка при отправке письма:', error)
    return NextResponse.json({ message: 'Письмо не отправилось', error: error.message }, { status: 500 })
  }
}
