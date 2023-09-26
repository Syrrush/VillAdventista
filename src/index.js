import express from 'express'
import __dirname from './utils.js';
import routerUser from "./router/userRouter.js"
import db from './daos/index.js'

const app = express()
const server = app.listen(8080, () => console.log('inicializado server'))

app.use(express.json()); // Especifica que podemos recibir json
app.use(express.urlencoded({ extended: true })); // Habilita poder procesar y parsear datos más complejos en la url

app.use(express.static(__dirname + "/public"));
app.use("/user/", routerUser);

