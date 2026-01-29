import dbConnection from "../config/db.js";

export abstract class AbstractRepository<T> {
  private tableName: string;

  protected transformRowToEntity(row: any): T {
    return row as T;
  }

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async findAll(): Promise<T[]> {
    const [rows] = await dbConnection.query<[]>(`SELECT * FROM ${this.tableName}`);
    return rows.map(row => this.transformRowToEntity(row));
  }

  async findById(id: number): Promise<T[]> {
    const [rows] = await dbConnection.query<[]>(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
    return rows.map(row => this.transformRowToEntity(row));
  }

  async create(data: T): Promise<void> {
    const columns = Object.keys(data as Object).join(", ");
    const values = Object.values(data as Object);
    const placeholders = values.map(() => "?").join(", ");

    await dbConnection.query(`INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`, [...values]);
  }

  async update(id: number, data: Partial<T>): Promise<void> {
    const columns = Object.keys(data as Object).map(key => `${key} = ?`).join(", ");
    const values = Object.values(data as Object);

    await dbConnection.query(`UPDATE ${this.tableName} SET ${columns} WHERE id = ?`, [...values, id]);
  }

  async delete(id: number): Promise<void> {
    await dbConnection.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
  }
}