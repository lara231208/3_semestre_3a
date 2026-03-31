import pkg from 'pg';
const {Pool} = pkg;
const BD = new Pool({
    connectionString: "//postgres.aaibbvjtldkxwdjevvpw:oEy0R4CmU95E5298@aws-1-sa-east-1.pooler.supabase.com:6543/postgres",
    ssl: {
        rejectUnauthorized: false
    }
})


// const BD = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'Admin',
//     database: 'BD_produtos',
//     port: 5432,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

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