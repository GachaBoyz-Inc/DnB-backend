import SpellService from "../service/SpellService";
import type {Response, Request} from "express"

class SpellController {
    private spellService: SpellService 

    constructor() {
        this.spellService = new SpellService()
    }
    
    async getAll(req: Request, res:Response) {
        const data = await this.spellService.getAll()
        res.status(data.status).json(data)
    }

    async getById(req: Request, res:Response) {
        const id = Number(req.params.id)
        const data = await this.spellService.getById(id)
        res.status(data.status).json(data)
    }

    async create(req: Request, res:Response) {
        const body = (req.body) 
        const data = await this.spellService.create(body)
        res.status(data.status).json(data)
    }

    async update(req: Request, res: Response) {
        const id = Number(req.params.id)
        const body = (req.body)
        const data = await this.spellService.update(id, body)
        res.status(data.status).json(data)
    }

    async delete(req: Request, res:Response) {
        const id = Number(req.params.id) 
        const data = await this.spellService.delete(id)
        res.status(data.status).json(data)
    }
} 

export default SpellController