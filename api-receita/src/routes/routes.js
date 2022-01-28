const router = require('express-promise-router')();
const receitaController = require('../controllers/receita.controller');
const usuarioModel = require('../models/user_model');


router.post('/register', usuarioModel.createUser);
router.post('/login', usuarioModel.findUser);

router.post('/receitas', receitaController.novaReceita);


router.get('/receitas', receitaController.listaReceita);


router.get('/receitas/:id', receitaController.achaReceitaId)


router.put('/receitas/:id', receitaController.atualizaReceita)


router.delete('/receitas/:id', receitaController.deletaReceita);

module.exports = router;