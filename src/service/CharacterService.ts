import Character from "../models/Character";
import { CharacterRepository } from "../repository/CharacterRepository";
import ResponseUtil from "../util/ResponseUtil";

class CharacterService {
    private characterRepository: CharacterRepository = new CharacterRepository()

    async getAllYourCharacters(user_id: number): Promise<ResponseUtil<Character[]>> {
        try {
            const characters = await this.characterRepository.getAllYourCharacters(user_id);
            return { data: characters, status: 200};
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno do servidor" };
        }
    }

    async getById(id: number): Promise<ResponseUtil<Character[]>> {
        try {
            const character = await this.characterRepository.findById(id);
            if (character.length === 0) {
                return { status: 404, message: "Personagem não encontrado" };
            }
            return { data: character, status: 200 };

        } catch (error) {
            return { status: 500, message: "Erro interno do servidor" };
        }
    }

    async createCharacter(data: Character): Promise<ResponseUtil<Character>> {
        try {
            await this.characterRepository.create(data);
            return { message: "Personagem criado com sucesso", status: 201 };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno do servidor" };
        }
    }

    async updateCharacter(id: number, data: Character): Promise<ResponseUtil<Character>> {
        try {
            const character = await this.characterRepository.findById(id);
            
            if (character.length === 0) {
                return { status: 404, message: "Personagem não encontrado" };
            }

            const updatedCharacter = await this.characterRepository.update(id, data);
            return { message: "Personagem atualizado com sucesso", status: 200 };
        } catch (error) {
            return { status: 500, message: "Erro interno do servidor" };
        }
    }

    async deleteCharacter(id: number): Promise<ResponseUtil<void>> {
        try {
            await this.characterRepository.delete(id);
            return { message: "Personagem excluído com sucesso", status: 204 };
        } catch (error) {
            return { status: 500, message: "Erro interno do servidor" };
        }
    }
}
export default CharacterService 