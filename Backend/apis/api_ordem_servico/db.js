import {Pool} from 'pg';

const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Admin',
    database: 'bd_orden_servico_3A',
    port: 5432
});

const testarConexao = async () => {
    try {
        const cliente = await BD.connect(); // realiza a conexão com o banco de dados
        console.log('Conexão estabelecida');
        cliente.release(); // libera a conexão
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
};

testarConexao();
export {BD, testarConexao};