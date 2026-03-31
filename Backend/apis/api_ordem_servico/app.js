import express from 'express';
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasDepartamentos from './src/routes/rotasDepartamentos.js';
import rotasOrdenServico from './src/routes/rotasOrdemServico.js';
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
//biblioteca para permitir a conexão entre front e api
app.use(cors())

app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json('API Funcionando')
    res.redirect('/swagger')
});

app.use(rotasUsuarios);
app.use(rotasDepartamentos);
app.use(rotasOrdenServico);

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});