 var mysql = require('mysql');

 var conexao;

  conexao = { 
    conexaoSQL : mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'projectbus'
    })
  };

module.exports = conexao;

/* var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ''
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */






