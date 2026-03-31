import express from 'express';
import rankingController from '../controllers/rankingController.js';

const router = express.Router();

router.get('/ranking', rankingController.listar);
router.push('/ranking', rankingController.adicionar)

export default router;