import {  Router } from 'express';
import { BD } from '../../db.js';
import bcrypt from 'bcrypt';

const router = Router();

// endpoint para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try {
        // criar uma variavel para enviar o comando sql
        const comando = 'SELECT * FROM usuarios';
        // criar uma variavel para receber o resultado do comando sql
        const usuarios = await BD.query(comando);
        // enviar o usuarios para o cliente
        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao listar usuários:', error.message);
        return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});


router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        // definindo a força da criptografia
        const saltRounds = 10
        // gerando o hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const comando = `INSERT INTO USUARIOS (nome, email, senha) VALUES ($1, $2, $3)`;
        await BD.query(comando, [nome, email, senhaCriptografada]);
        return res.status(201).json('Usuário cadastrado com sucesso');

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4`;
        await BD.query(comando, [nome, email, senha, id_usuario]);
        return res.status(200).json('Usuário atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const comando = `DELETE FROM usuarios WHERE id_usuario = $1`;
        await BD.query(comando, [id_usuario]);
        return res.status(200).json('Usuário deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});


router.post('/login', async(req, res) => {
    const{ email, senha} = req.body;

    try{
        // buscar usuario pelo email
        const comando = 'SELECT * FROM usuarios WHERE email = $1'
        const resultado = await BD.query(comando, [email])
        if(resultado === 0){
            return res.status(401).json({message: 'Email incorreto'})
        }

        const usuario = resultado.rows[0]

        // comparar a senha enviada com a senha gravada no banco
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
        if(!senhaCorreta){
            return res.status(401).json({message: 'Senha incorreta'})
        }
        // login realizado com suceeso
        return res.status(200).json({
            message: "Login realizado",
            usuario: {id_usuario: usuario.id_usuario, nome: usuario.nome}
        })
    }catch(error){
        console.error('Erro ao atualizar login', error.message);
        return res.status(500).json({message: "Erro interno no servidor" + error.message})
    }
})


export default router;
