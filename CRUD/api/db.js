import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "162919Ag#",
    database: "crud",
});

db.connect((err) => {
    if (err) {
        console.error("Erro de conexão:", err);
        return;
    }
    console.log("Conexão bem-sucedida!");
});
