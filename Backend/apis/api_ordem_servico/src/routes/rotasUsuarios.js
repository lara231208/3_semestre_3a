import { Router } from "express";
import { BD } from "../../db.js";

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

// endpoint para cadastrar um novo usuário
// o endpoint com parametros diretos no comando sql, permite o sql injection
// router.post('/usuarios', async (req, res) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const senha = req.body.senha;

//     try {
//         const comando = `INSERT INTO teste (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`;
//         await BD.query(comando);
//         res.status(201).json('Usuário cadastrado com sucesso');
//     } catch (error) {
//         console.error('Erro ao cadastrar usuário:', error.message);
//         res.status(500).json({ error: 'Erro ao cadastrar usuário' });
//     }
// })

router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // a sintaxe abaixo protege de sql injection
        const comando = `INSERT INTO teste (nome, email, senha) VALUES ('$1', '$2', '$3')`;
        const valores = [nome, email, senha];
        console.log(comando);
        console.log(valores);
        await BD.query(comando, valores);
        res.status(201).json('Usuário cadastrado com sucesso');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
})

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const verificarUsuario = await BD.query('SELECT * FROM USUARIOS WHERE id_usuario = $1', [id_usuario]);

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
})

router.patch('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;

    try {
        // verificar se o usuário existe
        const verificarUsuario = await BD.query('SELECT * FROM USUARIOS WHERE id_usuario = $1', [id_usuario]);

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // montar a atualização dinamicamente, apenas os campos que foram enviados
        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if (email !== undefined) {
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }
        if (senha !== undefined) {
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: 'Nenhum campo para atualizar' });
        }
        valores.push(id_usuario);

        const comando = `UPDATE USUARIOS SET ${campos.join(', ')} WHERE id_usuario = $${contador}`;
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
})

router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
   
    try {
        const verificarUsuario = await BD.query('SELECT * FROM USUARIOS WHERE id_usuario = $1', [id_usuario]);

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const comando = 'DELETE FROM USUARIOS WHERE id_usuario = $1';
        await BD.query(comando, [id_usuario]);
        return res.status(200).json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
});

export default router;
