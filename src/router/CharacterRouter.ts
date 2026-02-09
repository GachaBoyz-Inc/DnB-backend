import { Router } from 'express'   
import CharacterController from '../controller/CharacterController.ts'

const characterController = new CharacterController()
const router = Router()

router.get('/list', (req, res) => characterController.getAllYourCharacters(req, res))
router.get('/find/:id', (req, res) => characterController.getById(req, res))
router.post('/create', (req, res) => characterController.create(req, res))
router.put('/update/:id', (req, res) => characterController.update(req, res))
router.delete('/delete/:id', (req, res) => characterController.delete(req, res))

export default router