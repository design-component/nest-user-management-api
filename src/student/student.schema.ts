import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});
