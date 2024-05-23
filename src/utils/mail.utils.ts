import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

let transport: nodemailer.Transporter

if (typeof window === 'undefined') {
  // Этот код будет выполняться только на сервере
  transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development', // true
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  } as SMTPTransport.Options)
} else {
  // Этот код будет выполняться только в браузере
  console.log('Cannot create nodemailer transport in the browser')
}

type SendEmailDto = {
  sender: Mail.Address
  recipients: Mail.Address[]
  subject: string
  message: string
}

export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, recipients, subject, message } = dto

  if (transport) {
    return await transport.sendMail({
      from: sender,
      to: recipients,
      subject,
      html: message,
      text: message
    })
  } else {
    // Если transport не определен, то возвращаем ошибку или обрабатываем ее по-другому
    throw new Error('Nodemailer transport is not initialized')
  }
}
