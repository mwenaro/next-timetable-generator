import { Model, Document } from "mongoose";
import { dbCon } from "@/libs/mongoose/dbCon";

export class Controller<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
    dbCon(); // Ensure the DB connection is established
    // this.loadDB();
  }
  async loadDB() {
    await dbCon();
  }
  async create(data: Partial<T>): Promise<T> {
    const document = new this.model(data);

    return await document.save();
  }

  async createMany(data: Partial<T>[]): Promise<any[]> {
    return await this.model.insertMany(data);
  }

  async getById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async getAll(): Promise<T[]> {
    return await this.model.find();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id);
  }
}
