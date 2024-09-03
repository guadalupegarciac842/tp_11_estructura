//módulos

const express = require("express");
const path = require("path");

//puerto del servidor
const PORT = 3000;

//ejecución express
const app = express();

//recursos estáticos
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

//levantar el servidor
app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);
