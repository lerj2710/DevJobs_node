const express = require("express");
const { engine } = require("express-handlebars");

const path = require("path");
const router = require("./routers");

const app = express();
const port = 3000;

// habilitar handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "layout",
  })
);

/**
app.engine(
    "handlebars",
    exphbs.engine({
      defaultLayout: "layout",
      handlebars: allowInsecurePrototypeAccess(handlebars),
      helpers: require("./helpers/handlebars"),
    })
  );
 */

// static file
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(port, () => {
  console.log(`corriedo en el puerto ${port}`);
});
