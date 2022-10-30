import express from "express";
import EditoraController from "../controllers/editoraController.js";

const router = express.Router();

router 
    .get("/Editoras", EditoraController.listarEditoras)
    .get("/Editoras/:id", EditoraController.listarEditoraPorId)
    .post("/Editoras", EditoraController.cadastrarEditora)
    .put("/Editoras/:id", EditoraController.atualizarEditora)
    .delete("/Editoras/:id", EditoraController.excluirEditora); 
    

export default router;


