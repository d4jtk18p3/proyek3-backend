import express from 'express'
import router from './routes/test'
import router2 from './routes/test2'

const app = express()

// Middleware
app.use(router);
app.use(router2);

export default app
