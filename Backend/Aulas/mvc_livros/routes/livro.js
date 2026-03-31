import express from 'express';
import livroController from '../controllers/livroController.js';

const router = express.Router();
//rota listar livros
router.get('/Livros', livroController.listar);

//adicionar livros
router.post('/Livros', livroController.adicionar);

//rota para marcar como lido
router.post('/livros/marcar-Lido', livroController.marcarComoLido);

export default router;