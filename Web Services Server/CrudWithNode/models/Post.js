const db = require('./db');

const Post = db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    fabricante: {
        type: db.Sequelize.TEXT
    }
});

//Post.sync({force: true});

module.exports = Post
