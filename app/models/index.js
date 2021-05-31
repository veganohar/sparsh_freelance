const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.student = require("./students.model");

module.exports = db;