const sequelize = require('sequelize');

// Criando a conexão com o DB

const { Sequelize } = require('sequelize');
const connection = new Sequelize('nodewithmysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


connection.authenticate()
.then(function(){
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(function(){
    console.log('[ERRO] Conexão do banco de dados não realizada.');
});

module.exports = connection; // Exportando a conexão para poder ser utilizada.



/**
 * Você pode conferir a documentação de conexão da
 * dependência Sequelize utilizando esse link.
 * https://sequelize.org/docs/v6/getting-started/
 * 
 * 
 * O código acima(connection.authenticate()) deve ser usado apenas 
 * enquanto está em desenvolvimento com intuito de testes(Verificando se a 
 * conexão foi bem sucedida ou não). Pois não é uma boa prática exibir uma 
 * mensagem dessas para o usuário final. Uma boa opção seria exibir uma 
 * frase como: 'Ação não realizada entre em contato pelo email:
 * Exemplo@gmail.com para resolução do problema.' Essa seria um exemplo de
 * uma frase mais "Amigavel" para o usuário.
 * 
 * Para verificar a conexão você mesmo, altere um dos campos da
 * const connection = new Sequelize, E você verá a mensagem de erro
 */