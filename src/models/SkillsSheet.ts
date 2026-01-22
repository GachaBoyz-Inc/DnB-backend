class SkilsSheet{
    private id: number
    private sheetId: number
    private skillId: number

    constructor(id: number, sheetId: number, skillId: number){
        this.id = id
        this.sheetId = sheetId
        this.skillId = skillId
    };

    getSkillsSheetId(){
        return this.id
    }
    getSkillsSheetSheetId(){
        return this.sheetId
    }
    getSkillsSheetSkillId(){
        return this.skillId
    }

    setSkillSheetSheetId(sheetId: number){
        this.sheetId = sheetId
    }
    setSkillSheetSkillId(skillId: number){
        this.skillId = skillId
    }

}

