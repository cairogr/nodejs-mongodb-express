import fs from "fs";

// fs.mkdir('C:/Workspace/Learning/nodejs-express-mongodb/teste', (err) => {
//     if (err) {
//         return console.log("Erro:", err);
//     }
//     return console.log("Pasta criada com sucesso!");
//   });
let dados = []
fs.writeFile('user.json', "dados", (error) =>{
    if (error){
        return console.log(error)
    }

    return console.log("Arquivo Criado com sucesso!")
})


export default { fs };