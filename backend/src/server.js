import express from 'express';
import tasksRouters from './routes/tasksRouters.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

// Middleware
app.use(cors( {origin: 'http://localhost:5173'} ))
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use('/api/tasks', tasksRouters)

connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  })
})




