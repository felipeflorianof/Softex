const db = require('./db');

const Post = db.sequelize.define('pessoas', {
    usuario: {
        type: db.Sequelize.STRING
    },
    talent: {
        type: db.Sequelize.TEXT
    },
    linguagem: {
        type: db.Sequelize.TEXT
    }
});

Post.sync({force: true});

module.exports = Post
