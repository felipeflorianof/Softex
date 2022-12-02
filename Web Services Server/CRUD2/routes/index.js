const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('../models/Post');
const router = express.Router();

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
// Rotas

  app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then( posts => {
        res.render('home', {posts: posts});
    });
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        usuario: req.body.usuario,
        talent: req.body.talent,
        linguagem: req.body.linguagem
    }).then(() => {
        res.redirect('/');
    }).catch(error => {
        res.send('Error:' + error)
    });
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
      res.redirect('/');
    }).catch(error => {
        res.send('Error:' +error);
    });
});

app.get('/edit/:id', function(req, res){
    Post.findByPk(req.params.id)
      .then(post => {
        res.render('form-edit', {
          id: req.params.id,
          usuario: post.usuario,
          talent: post.talent,
          linguagem: post.linguagem
        })
      })
      .catch(err => {
        res.send('Post não encontrado!')
      })
  })
  app.post('/editado/:id', function(req, res){
    Post.update({
      usuario: req.body.usuario,
      talent: req.body.talent,
      linguagem: req.body.linguagem
    },
    {
      where: { id: req.params.id }
    }).then(function(){
      res.redirect('/')
    }).catch(function(err){
      console.log(err);
    })
  });

  app.all("/*", (req, res) => {
    res.status(404).send({message: "Rota não encontrada"});
  });

      module.exports = router;

    app.listen(8081, () => {
        console.log('Servidor rodando da URL: http://localhost:8081');
    });