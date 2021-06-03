const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
}

const transporter = nodemailer.createTransport(smtpConfig)

transporter.verify((err, success) => {
  if (err) return new Error(err)
  console.log('Your config is correct')
}
)

exports.resetPassword = async (email, username, token) => transporter.sendMail({
  from: 'Politeknik Negeri Bandung',
  to: email,
  subject: 'Permintaan ',
  template: 'forgetpassword',
  context: {
    user: username,
    verificationToken: token
  }
})

const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: 'src/util/mailer/views/partials',
    layoutsDir: 'src/util/mailer/views/layouts',
    defaultLayout: ''
  },
  viewPath: 'src/util/mailer/views/templates',
  extName: '.handlebars'
}

transporter.use('compile', hbs(handlebarOptions))
