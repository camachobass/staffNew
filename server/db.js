import mongoose from "mongoose";
import dotenv from "dotenv";
import {MONGODB_URI} from './config.js'

dotenv.config();

export async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
}
