import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// endpoint para listar todos os produtos
router.get('/produtos', async (req, res) => {
    try {
        // criar uma variavel para enviar o comando sql
        const comando = 'SELECT * FROM produtos';
        // criar uma variavel para receber o resultado do comando sql
        const produtos = await BD.query(comando);
        // enviar o produtos para o cliente
        return res.status(200).json(produtos.rows);
    } catch (error) {
        console.error('Erro ao listar produtos:', error.message);
        return res.status(500).json({ error: 'Erro ao listar produtos' });
    }
});

router.post('/produtos', async (req, res) => {
    const { nome, descricao, preco, categoria, frete_gratis, url_imagem, url_produto } = req.body;
    try {
        // a sintaxe abaixo protege de sql injection
        const comando = `INSERT INTO produtos (nome, descricao, preco, categoria, frete_gratis, url_imagem, url_produto) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        await BD.query(comando, [nome, descricao, preco, categoria, frete_gratis, url_imagem, url_produto]);
        return res.status(201).json('Produto cadastrado com sucesso');
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
});

router.put('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    const { nome, descricao, preco, categoria, frete_gratis, url_imagem, url_produto } = req.body;
    try {
        const comando = `UPDATE produtos SET nome = $1, descricao = $2, preco = $3, categoria = $4, frete_gratis = $5, url_imagem = $6, url_produto = $7 WHERE id_produto = $8`;
        await BD.query(comando, [nome, descricao, preco, categoria, frete_gratis, url_imagem, url_produto, id_produto]);
        return res.status(200).json('Produto atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

router.delete('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;

    try {
        const verificarProduto = await BD.query('SELECT * FROM produtos WHERE id_produto = $1', [id_produto])

        if (verificarProduto.rows.length === 0) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        const comando = 'DELETE FROM produtos WHERE id_produto = $1';
        await BD.query(comando, [id_produto]);
        return res.status(200).json({ message: 'Produto excluido com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir produto:', error.message);
        return res.status(500).json({ error: 'Erro ao excluir produto' })
    }
}
)

export default router;