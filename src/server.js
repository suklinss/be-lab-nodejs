const Hapi = require("@hapi/hapi");
const router = require("./router");

const mongoose = require("mongoose");


const server = Hapi.server({
  port: 8000,
  host: "localhost",
  routes: {
    cors: {
      origin: ["http://localhost:9000"], // Replace with the actual origin of your frontend application
      headers: ["Authorization", "Content-Type"],
      credentials: true, // Allow cookies and authorization headers
    },
  }
});
router.forEach((path) => server.route(path));

var uri = "mongodb+srv://admin:OHsAgROIOW6zMo8G@cluster0.uynyu2g.mongodb.net/templateproject"
// var uri = "mongodb://localhost:27017/templateproject";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

module.exports = server;