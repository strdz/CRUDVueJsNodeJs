

var sql = require('../config/database.js').conexaoSQL;

//POR ESTAR USANDO MYSQL NO XAMP, DECIDI DEIXAR A INSERÇÃO DO ID MANUALMENTE.
exports.novaReceita = async (req, res) => {
  const id  = 10; 
  const { nome, tempo_preparo, porcao, modo_preparo, ingredientes } = req.body;
  try {
    let query = 'INSERT INTO receitas (id, nome, tempo_preparo, porcao, modo_preparo, ingredientes, criado_em) VALUES (?,?,?,?,?,?,?)';
    let values = [id, nome, tempo_preparo, porcao, modo_preparo, ingredientes, 'now()'];
    sql.getConnection(function(err, connection) {
      connection.query(query, values, function(err, results, rows) {
        if (err) {
          console.error(err.message);
        }
        connection.release();
      });
    });
    res.status(201).send({
      message: "Receita cadastrada com successo!",
      body: {
        receita: { id, nome, tempo_preparo, porcao, modo_preparo, ingredientes },
      },
    });
  } catch (error) {
    console.error('criarReceita', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};


exports.listaReceita = async (req, res) => {
  try {
    sql.getConnection(function(err, connection) {
      connection.query(`SELECT
      id, 
      nome, 
      tempo_preparo, 
      porcao, 
      modo_preparo, 
      ingredientes,
      criado_em
    FROM receitas ORDER BY nome asc`, function (err, result, rows) {
      if(err) throw err;
        connection.release();
        res.status(200).send(result);
      });
    });
  } catch (error) {
    console.error('listaReceita', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};


exports.achaReceitaId = async (req, res) => {
  const { id } = req.params;
  try {
    sql.getConnection(function(err, connection) {
      connection.query(`SELECT
      id, 
      nome, 
      tempo_preparo, 
      porcao, 
      modo_preparo, 
      ingredientes,
      criado_em
    FROM receitas WHERE id = ?`, [id], function (err, result, rows) {
      if(err) throw err;
        connection.release();
        res.status(200).send(result[0]);
      });
    });
  } catch (error) {
    console.error('achaReceitaId', error);
    if (error == '') {
      res.status(404).send({
        message: "Receita not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};


exports.atualizaReceita = async (req, res) => {
  const { id } = req.params;
  const { nome, tempo_preparo, porcao, modo_preparo, ingredientes } = req.body;
  try {
    let query = 'UPDATE receitas SET nome = ?, tempo_preparo = ?, porcao = ?, modo_preparo = ?, ingredientes = ?, alterado_em = ? WHERE id = ?';
    let values = [nome, tempo_preparo, porcao, modo_preparo, ingredientes, 'now()', id];
    sql.getConnection(function(err, connection) {
      connection.query(query, values, function(err, results, rows) {
        if (err) {
          console.error(err.message);
        }
        connection.release();
      });
    });
    res.status(201).send({
      message: "Receita atualizada com successo!",
      body: {
        receita: { nome, tempo_preparo, porcao, modo_preparo, ingredientes },
      },
    });
  } catch (error) {
    console.error('atualizaReceita', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

exports.deletaReceita = async (req, res) => {
  const { id } = req.params;
  try {
    let query = 'DELETE FROM receitas WHERE id = ?)';
    let values = [id];
    sql.getConnection(function(err, connection) {
      connection.query(query, values, function(err, results, rows) {
        if (err) {
          console.error(err.message);
        }
        connection.release();
      });
    });
    res.status(200).send({
      message: "Receita excluida com successo!"
    });
  } catch (error) {
    console.error('deletaReceita', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
