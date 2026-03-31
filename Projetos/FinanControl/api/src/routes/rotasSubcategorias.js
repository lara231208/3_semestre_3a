import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

router.get('/subcategorias', async (req, res) => {
    try {
        const comando = `SELECT * FROM subcategorias WHERE ativo = true`

        const subcategorias = await BD.query(comando);

        return res.status(200).json(subcategorias.rows);
    } catch (error) {
        console.error('Erro ao listar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar subcategorias' })
    }
})

router.post('/subcategorias', async (req, res) => {
    const { nome, id_categoria } = req.body;

    try {
        const comando = `INSERT INTO SUBCATEGORIAS(nome, id_categoria) VALUES($1, $2)`
        const valores = [nome, id_categoria];

        await BD.query(comando, valores)

        return res.status(201).json("Subcategoria cadastrada.");
    } catch (error) {
        console.error('Erro ao cadastrar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar subcategorias' })
    }
})

router.put('/subcategorias/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    const { nome, id_categoria } = req.body;

    try {
        const verificarSubcategoria = await BD.query(`SELECT * FROM SUBCATEGORIAS
            WHERE id_subcategoria = $1 and ativo = true`, [id_subcategoria])
        if (verificarSubcategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Subcategoria não encontrada' })
        }

        const comando = `UPDATE SUBCATEGORIAS SET nome = $1,  id_categoria = $2 WHERE
        id_subcategoria = $3 AND ativo = true`;
        const valores = [nome, id_categoria, id_subcategoria];
        await BD.query(comando, valores);

        return res.status(200).json('Subcategoria foi atualizada!');
    } catch (error) {
        console.error('Erro ao atualizar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar subcategorias' })
    }
})


router.delete('/subcategorias/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    try {
        const comando = `UPDATE SUBCATEGORIAS SET ativo = false WHERE id_subcategoria = $1`;
        await BD.query(comando, [id_subcategoria]);
        return res.status(200).json({ message: "Subcategoria removida com sucesso" });
    }   catch (error) {
        console.error('Erro ao atualizar subcategoria', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})


export default router