import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// endpoint para listar todas as ordens de serviço
router.get('/ordem_servicos', async (req, res) => {
    try {
        const comando = 'SELECT * FROM ordem_servicos';
        const ordensServico = await BD.query(comando);
        return res.status(200).json(ordensServico.rows);
    } catch (error) {
        console.error('Erro ao listar ordens de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao listar ordens de serviço' });
    }
});

router.post('/ordem_servicos', async (req, res) => {
    const { descricao, data_criacao, id_usuario, id_departamento } = req.body;

    try {
        const comando = 'INSERT INTO ordem_servicos (descricao, data_criacao, id_usuario, id_departamento) VALUES ($1, $2, $3, $4)';
        await BD.query(comando, [descricao, data_criacao, id_usuario, id_departamento]);
        return res.status(201).json('Ordem de serviço cadastrada com sucesso');
    } catch (error) {
        console.error('Erro ao cadastrar ordem de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar ordem de serviço' });
    }
});

router.put('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { descricao, data_criacao, id_usuario, id_departamento } = req.body;

    try {
        const verificarOrdemServico = await BD.query('SELECT * FROM ordem_servicos WHERE id_ordem = $1', [id_ordem]);
       
        if (verificarOrdemServico.rows.length === 0) {
            return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
        }

        const comando = `UPDATE ordem_servicos SET descricao = $1, data_criacao = $2, id_usuario = $3, id_departamento = $4 WHERE id_ordem = $5`;
        const valores = [descricao, data_criacao, id_usuario, id_departamento, id_ordem];
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Ordem de serviço atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar ordem de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
});

router.patch('/ordem_servicos/:id_ordem/status', async (req, res) => {
    const { id_ordem } = req.params;
    const { status } = req.body;

    try {
        const verificarOrdemServico = await BD.query('SELECT * FROM ordem_servicos WHERE id_ordem = $1', [id_ordem]);

        if (verificarOrdemServico.rows.length === 0) {
            return res.status(404).json({ message: 'Ordem de serviço não encontrada' });
        }

        const campoAtualizado = [];
        const valores = [];
        let contador = 1;

        if (status !== undefined) {
            campoAtualizado.push(`status = $${contador}`);
            valores.push(status);
            contador++;
        }

        if (campoAtualizado.length === 0) {
            return res.status(400).json({ message: 'Nenhum campo para atualizar' });
        }
        valores.push();

        const comando = `UPDATE ordem_servicos SET ${campoAtualizado.join(', ')} WHERE  = $${contador}`;
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Status da ordem de serviço atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar status da ordem de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar status da ordem de serviço' });
    }
});

router.delete('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;

    try {
        const verificarOrdemServico = await BD.query('SELECT * FROM ordem_servicos WHERE id_ordem = $1', [id_ordem]);

        if (verificarOrdemServico.rows.length === 0) {
            return res.status(404).json({ message: 'Ordem de serviço não encontrada' });
        }

        const comando = 'DELETE FROM ordem_servicos WHERE id_ordem = $1';
        await BD.query(comando, [id_ordem]);
        return res.status(200).json({ message: 'Ordem de serviço excluida com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir ordem de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao excluir ordem de serviço' });
    }
});

export default router;