const mongooes = require("mongoose");

const db = async () => {
    await mongooes.connect("mongodb+srv://patelrushil1510:bGNpH9TsRydmPcol@movie-admin.umg6smc.mongodb.net/?retryWrites=true&w=majority&appName=Movie-admin");
    console.log("database is connected");
}

module.exports = db;

// bGNpH9TsRydmPcol