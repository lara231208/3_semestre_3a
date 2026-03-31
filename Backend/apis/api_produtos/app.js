import express from 'express';
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotas_Usuarios.js';
import rotasProdutos from './src/routes/rotas_Produtos.js';
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js'
import cors from 'cors'

const app = express();
app.use(express.json());
//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
app.get('/swagger', (req, res) => {

res.send(`<!DOCTYPE html>
<html><head>
<title>API Produtos</title>
<meta charset="utf-8"/>
<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
</head><body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
<script>
SwaggerUIBundle({
spec: ${JSON.stringify(documentacao)},
dom_id: '#swagger-ui'})
</script>
</body></html>`);
});
//biblioteca para permitir a conexão entre front e api
app.use(cors())

app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json('API Funcionando')
    res.redirect('/swagger')
});

app.use(rotasUsuarios);
app.use(rotasProdutos);

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});