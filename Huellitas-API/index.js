const express = require('express');
const apisRoute = require("./routes/api");

// settings
const app = express();
const PORT = process.env.PORT || 3000;
app.set("token", process.env.TOKEN || "recipeT0k3n");
app.listen(PORT, () => console.log(`Escuchando en puerto", ${PORT}`));

// middlewares
app.use(express.json());
app.use("/api", apisRoute);

// routes
app.get("/", (req, res) => {
  res.send("Huellitas API");
});