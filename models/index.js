var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(process.env.MONGODB_URO || "mongodb://localhost/todo-api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

