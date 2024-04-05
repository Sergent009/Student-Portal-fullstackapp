import express from 'express'
const router = express.Router()

import { registerUser, loginUser, updateUser } from '../controllers/contoller.js'

router.post('/regST', registerUser)

router.post('/loginST', loginUser)

router.put('/updateST/:id', updateUser)

export default router