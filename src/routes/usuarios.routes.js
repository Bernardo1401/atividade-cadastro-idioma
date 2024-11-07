import { Router } from "express";

const idiomasRoutes = Router();

let idiomas = [];

idiomasRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: idiomas.length ==0 ? "Não há idiomas cadastrados" : `Total de idiomas cadastrados: ${idiomas.length}`, idiomas,

    });
});


export default idiomasRoutes;