import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// endpoint para listar todos os departamentos
router.get('/departamentos', async (req, res) => {
    try {
        const comando = 'SELECT * FROM departamentos';
        const departamentos = await BD.query(comando);
        return res.status(200).json(departamentos.rows);
    } catch (error) {
        console.error('Erro ao listar departamentos:', error.message);
        return res.status(500).json({ error: 'Erro ao listar departamentos' });
    }
});

router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        const comando = 'INSERT INTO departamentos (nome, descricao) VALUES ($1, $2)';
        await BD.query(comando, [nome, descricao]);
        return res.status(200).json('Departamento cadastrado com sucesso');
    } catch (error) {
        console.error('Erro ao cadastrar departamento:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar departamento' });
    }
});

router.put('/departamentos/:id_departamento', async (req, res) => {
    const { id_departamento } = req.params;
    const { nome, descricao } = req.body;

    try {
        const verificarDepartamento = await BD.query('SELECT * FROM departamentos WHERE id_departamento = $1', [id_departamento]);
        if (verificarDepartamento.rows.length === 0) {
            return res.status(404).json({ error: 'Departamento não encontrado' });
        }

        const comando = `UPDATE departamentos SET nome = $1, descricao = $2 WHERE id_departamento = $3`;
        const valores = [nome, descricao, id_departamento];
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Departamento atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar departamento:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
});

router.patch('/departamentos/:id_departamento', async (req, res) => {    
    const { id_departamento } = req.params;
    const { nome, descricao } = req.body;

    try {
    const verificarDepartamento = await BD.query('SELECT * FROM departamentos WHERE id_departamento = $1', [id_departamento]);
    if (verificarDepartamento.rows.length === 0) {
        return res.status(404).json({ error: 'Departamento não encontrado' });
    }

    const camposAtualizados = [];
    const valores = [];
    let contador = 1;

    if (nome !== undefined) {
        camposAtualizados.push(`nome = $${contador}`);
        valores.push(nome);
        contador++;
    }
    if (descricao !== undefined) {
        camposAtualizados.push(`descricao = $${contador}`);
        valores.push(descricao);
        contador++;
    }
    if (camposAtualizados.length === 0) {
        return res.status(400).json({ error: 'Nenhum campo para atualizar' });
    }
    valores.push(id_departamento);


    const comando = `UPDATE departamentos SET ${camposAtualizados.join(', ')} WHERE id_departamento = $${contador}`;
    await BD.query(comando, valores);
    return res.status(200).json({ message: 'Departamento atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar departamento:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
});

router.delete('/departamentos/:id_departamento', async (req, res) => {
    const { id_departamento } = req.params;

    try {
        const verificarDepartamento = await BD.query('SELECT * FROM departamentos WHERE id_departamento = $1', [id_departamento]);
        if (verificarDepartamento.rows.length === 0) {
            return res.status(404).json({ error: 'Departamento não encontrado' });
        }

        const comando = 'DELETE FROM departamentos WHERE id_departamento = $1';
        await BD.query(comando, [id_departamento]);
        return res.status(200).json({ message: 'Departamento excluido com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir departamento:', error.message);
        return res.status(500).json({ error: `Erro ao excluir departamento ${error.message}` });
    }
});

export default router;