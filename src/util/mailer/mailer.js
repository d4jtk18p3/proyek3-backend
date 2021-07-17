import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.RESET_EMAIL_EMAIL,
    pass: process.env.RESET_EMAIL_PW
  }
}

const transporter = nodemailer.createTransport(smtpConfig)

transporter.verify((err, success) => {
  if (err) return new Error(err)
  console.log('Your config is correct')
})

export const verifyMail = async (email, username, token) => {
  const address = {
    name: 'Politeknik Negeri Bandung',
    address: process.env.RESET_EMAIL_EMAIL
  }
  transporter.sendMail({
    from: address,
    to: email,
    subject: 'Email Verifikasi Akun Politeknik Negeri Bandung',
    template: 'verify',
    context: {
      user: username,
      verificationToken: token
    }
  })
}

export const resetPassword = async (email, username, token) => {
  const address = {
    name: 'Politeknik Negeri Bandung',
    address: process.env.RESET_EMAIL_EMAIL
  }
  transporter.sendMail({
    from: address,
    to: email,
    subject: 'Permintaan Reset Password',
    template: 'forgetpassword',
    context: {
      user: username,
      verificationToken: token
    }
  })
}

const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: 'src/util/mailer/views/partials',
    layoutsDir: 'src/util/mailer/views/layouts',
    defaultLayout: ''
  },
  viewPath: 'src/util/mailer/views/template',
  extName: '.handlebars'
}

transporter.use('compile', hbs(handlebarOptions))

const transporter2 = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.RESET_EMAIL_EMAIL,
    pass: process.env.RESET_EMAIL_PW
  }
})

export const createUserEmail = async (email, token) =>
  transporter2.sendMail({
    from: 'Politeknik Negeri Bandung',
    to: email,
    subject: 'Akun baru',
    text: `Lengkapi pendaftaran akun baru anda dengan mengklik url berikut: http://akun.localhost:5000/login?method=token&value=${token}`
  })
