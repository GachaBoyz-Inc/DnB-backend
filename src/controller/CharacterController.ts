import { CharacterRepository } from "../repository/CharacterRepository"
import CharacterService from "../service/CharacterService";
import type { Response, Request } from "express";

class CharacterController {
    private characterService: CharacterService

    constructor() {
        this.characterService = new CharacterService()
    }

    async getAllYourCharacters(req: Request, res: Response) {
        console.log("Chegou no controller")
        const user_id = Number(req.params.id) 
        const characters = await this.characterService.getAllYourCharacters(user_id)
        res.status(characters.status).json(characters)
    }

    async getById(req: Request, res: Response) {
        const id = Number(req.params.id)

        try {
            const data = await this.characterService.getById(id)
            res.status(data.status).json(data)
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor" })
        }
    }

    async create(req: Request, res: Response) {
        const body = req.body
        const data = await this.characterService.createCharacter(body)
        res.status(data.status).json(data)
    }

    async update(req: Request, res: Response) {
        const id = Number(req.params.id)
        const body = req.body
        const data = await this.characterService.updateCharacter(id, body)
        res.status(data.status).json(data)
    }

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        const data = await this.characterService.deleteCharacter(id)
        res.status(data.status).json(data)
    }
}

export default CharacterController