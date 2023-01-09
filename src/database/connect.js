import mongoose from "mongoose";

const connectToDatabase = () => {
    mongoose.set('strictQuery',false);
    mongoose.connect('mongodb://127.0.0.1:27017/database',{useNewUrlParser: true}, 
    (err) => {
            if (err){
                return console.log("Error:", err)
            }
            return console.log("BD conectado com sucesso!")
        }
)}

mongoose.se

export { connectToDatabase };