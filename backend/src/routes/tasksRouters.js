import express from 'express'
import { getAllTasks, creatTask, updateTask, deletetask } from '../controllers/tasksControllers.js'

const router = express.Router()


router.get('/', getAllTasks)

router.post('/', creatTask)

router.put('/:id', updateTask)

router.delete('/:id', deletetask)
export default router