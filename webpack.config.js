const path = require("path");

module.exports = {
    entry: "./js/app.js", // Ulazna točka - glavna JS datoteka
    output: {
        filename: "bundle.js", // Naziv izlazne bundle datoteke
        path: path.resolve(__dirname, "dist"), // Putanja do izlaznog direktorija
    },
};
