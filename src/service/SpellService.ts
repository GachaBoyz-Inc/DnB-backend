import Spell from "../models/Spell"
import SpellRepository from "../repository/SpellRepository"
import ResponseUtil from "../util/ResponseUtil"

class SpellService {
    private spellRepository: SpellRepository = new SpellRepository()

    async getAll(): Promise<ResponseUtil<Spell[]>> {
        try {
            const spells = await this.spellRepository.findAll()
            return {data: spells, status:200}
        } catch (error) {
            console.log(error)
            return {status: 500, message: "Um erro interno aconteceu no servidor"}
        }
    }

    async getById(id: number): Promise<ResponseUtil<Spell[]>> {
        try {
            const spell = await this.spellRepository.findById(id);

            if (spell.length === 0) {
                return {status:404, message: "Feitiço não encontrado"}
            }

            return {data: spell, status: 200}
        } catch (error) {
            return {status: 500, message: "Um erro interno ocorreu no servidor"}
        }
    }

    async create(data: Spell): Promise<ResponseUtil<null>> {
        try {
            await this.spellRepository.create(data) 
            return {status: 200, message: "Feitiço criado com sucesso!"}
        } catch(error) {
            console.log(error)
            return {status: 500, message: "Um erro interno ocorreu no servidor"}
        }
    }
    
    async update(id: number, data: Partial<Spell>): Promise<ResponseUtil<null>> {
        try {
            const spell = await this.spellRepository.findById(id)

            if (spell.length === 0) {
                return {status:404, message: "Feitiço não encontrado"}
            } 
            return {status:200, message: "Feitiço atualizado"}
        } catch (error) {
            return {status: 500, message: "Um erro interno ocorreu no servidor"}
        }
    }

    async delete(id: number): Promise<ResponseUtil<null>> {
        try {
           const spell = await this.spellRepository.findById(id)

           if (spell.length === 0) {
                return {status: 404, message:"Feitiço não encontrado"}
           }

           await this.spellRepository.delete(id)
           return {status: 200, message: "Feitiço deletado com sucesso!"}
        } catch (error) {
            return {status:500, message:"Um erro interno ocorreu no servidor"}
        }
    }
}
export default SpellService

