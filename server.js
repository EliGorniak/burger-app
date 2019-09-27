// ==== Global variables =====
var express = require("express");
var app = express();
var db = require("./models");

// Set the PORT for connection:
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory:
app.use(express.static("public"));

// Parse application body as JSON:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars:
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
