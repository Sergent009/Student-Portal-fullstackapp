import express from 'express'
import cors from 'cors'
import Router from './routes/route.js'
const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

app.use(cors())

app.use(Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})