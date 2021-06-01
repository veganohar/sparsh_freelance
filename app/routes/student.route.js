const controller = require("../controllers/student.controller");

module.exports = function(app){
    app.post("/api/students/saveNewStudent",controller.saveNewStudent);
}