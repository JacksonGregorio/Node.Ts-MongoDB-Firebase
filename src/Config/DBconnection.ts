import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

let db = mongoose.connection;

export default db;