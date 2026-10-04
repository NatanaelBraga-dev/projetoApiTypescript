import Express from "express";

const server = Express()

server.get('/', (req, res) =>{
    return res.send("olá dev")
} )

export {server}