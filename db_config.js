var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "arc_express",
});

connection.connect((err, result) => {
  if (err) console.log(err);
  else console.log("connected");
});

module.exports = connection;
