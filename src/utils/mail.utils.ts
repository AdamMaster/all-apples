import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import dotenv from 'dotenv'

// Загружаем переменные окружения из .env файла
dotenv.config()

let transporter: Mail

export const initializeTransporter = () => {
  transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    // secure: process.env.NODE_ENV !== 'development', // true
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  } as SMTPTransport.Options)
}

type SendEmailDto = {
  sender: Mail.Address
  recipients: Mail.Address[]
  subject: string
  message: string
}

export const sendEmail = async (dto: SendEmailDto) => {
  if (!transporter) {
    throw new Error('Transporter not initialized')
  }

  const { sender, recipients, subject, message } = dto

  return await transporter.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: message,
    text: message
  })
}
