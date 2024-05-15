import mongoose from "mongoose";
import dotenv from "dotenv";
import bucket from "./DBfirebaseConnection";

dotenv.config();

const uri = process.env.MONGODB_URI

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

let db = mongoose.connection;

console.log(bucket);

export default db;