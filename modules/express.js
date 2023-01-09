import express from "express";
import { UserModel } from '../src/models/user.model.js'

const app = express();
const port = 3000;
app.use(express.json());

function createServerHTTP() {
    app.get('/home', (req, res) => {
        res.status(200).send("<h1>Hello World</h1>")
    })
    
    app.get('/users', async (req, res) => {
        try{
            const users = await UserModel.find({});
            res.status(200).json(users);
        }
        catch(err){
            return res.status(500).send(err.message);
        }

    })
    app.post('/users', async (req, res) => {
        try{
            const user = await UserModel.create(req.body)

            res.status(201).json(user);
        }
        catch(err){
            res.status(500).send(err.message)

        }
        
    })

    app.listen(port, () => console.log("Servidor de pé!"))
}

export { createServerHTTP };