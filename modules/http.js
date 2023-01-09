import http from 'http';

const port = 3000;
const host = "";

function createServerHTTP () {
    const server = http.createServer((req, res) => {
        if (req.url === "/home"){
            res.writeHead(200, {"Content-Type": "text/html" });
            res.end("<h1>Home Page</h1>");
        }
        if (req.url === '/users'){
            const users = [
                {
                    name: "charmander",
                    email: "charmander@examples.com",
                    
                },
                {
                    name: "pikachu",
                    email: "pikachu@examples.com",
                }
            ]
            res.writeHead(200, {"Content-Type": "application/json" });
            res.end(JSON.stringify(users))
        }
    
    })
    
    server.listen(port, () => {console.log("Servidor em pé")})
}


export { createServerHTTP };