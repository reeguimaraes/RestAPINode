import mongoose from "mongoose";

mongoose.connect("mongodb+srv://renato:123@aluranodeapi.8rm2bpr.mongodb.net/alura-node ");

let db = mongoose.connection;

export default db;

