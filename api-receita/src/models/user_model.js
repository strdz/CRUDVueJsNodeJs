
var sql = require('../config/database.js').conexaoSQL;

exports.createUser = async (req, res) => {
    const id = 6;
    const { name, email, password } = req.body;
    try {
      let query = 'INSERT INTO usuarios (id, nome, email, senha) VALUES (?,?,?,?)';
      let values = [id, name, email, password];
      sql.getConnection(function(err, connection) {
        connection.query(query, values, function(err, results, rows) {
          if (err) {
            console.error(err.message);
          }
          connection.release();
        });
      });
      res.status(201).send({
        message: "Usuario cadastrado com sucesso!",
        body: {
          usuario: {id, name, email}
        },
      });
    } catch (error) {
      console.error('createUser', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

exports.findUser = async (req, res) => {
    const { email, password } = req.body;
    let query = 'SELECT NOME, LOGIN, SENHA FROM usuarios WHERE login = ? and senha = ?';
    let parametros = [email, password];
    try {
        sql.getConnection(function(err, connection) {
            connection.query(query, parametros, function (err, result, rows) {
          if(err) throw err;
          connection.release();
          res.status(200).send(result);
        });
    });
    } catch (error) {
      console.error('findUser', error);
      if (error == 'usuario nao encontrado') {
        res.status(404).send({
          message: "usuario nao encontrado."
        });
      } else {
        res.status(500).send({
          message: "Ocorreu um erro."
        });
      }
    }
  };