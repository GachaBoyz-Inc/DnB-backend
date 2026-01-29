import type Class from "../models/Class.js";
import ClassRepository from "../repository/ClassRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class ClassService{
    private classRepository: ClassRepository = new ClassRepository();

    async getAllClass(): Promise<ResponseUtil<Class[]>> {
    try {
        const classes = await this.classRepository.findAll();
        return { data: classes, status: 200 };
    } catch (error) {
        return { status: 500, message: "Erro interno do servidor" };
    }
 }

 async getClassById(id: number): Promise<ResponseUtil<Class[]>> {
  try {
    const classes = await this.classRepository.findById(id);
    
    if (classes.length === 0) {
        return {status: 404, message: "Classe não encontrada" };
    }

    return { data: classes, status: 200 };
  } catch (error) {
    return { status: 500, message: "Erro interno do servidor" };
  }
 }

 async create(data: Class): Promise<ResponseUtil<null>> {
    try{
        await this.classRepository.create(data);
        return { status: 200, message: "Classe criada com sucesso" };
    } catch (error) {
        return { status: 500, message: "Erro interno do servidor" };
    }
 } 
 async update(id: number, data: Partial<Class>): Promise<ResponseUtil<null>> {
    try {
        const classes = await this.classRepository.findById(id);

        if (classes.length === 0) {
            return { status: 404, message: "Classe não encontrada" };
        }

        await this.classRepository.update(id, data);
        return { status: 200, message: "Classe atualizada com sucesso" };
    } catch (error) {
        return { status: 500, message: "Erro interno do servidor" };
    }
 }
 async delete(id: number): Promise<ResponseUtil<null>> {
    try {
        const classes = await this.classRepository.findById(id);

        if (classes.length === 0) {
            return { status: 404, message: "Classe não encontrada" };
        }

        await this.classRepository.delete(id);
        return { status: 200, message: "Classe deletada com sucesso" };
    } catch (error) {
        return { status: 500, message: "Erro interno do servidor" };
    }
 }
}

export default ClassService;