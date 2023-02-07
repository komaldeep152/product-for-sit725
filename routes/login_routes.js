let express = require("express");
var router1 = express.Router();
let login = require("../controller");

router1.get('/',(req, res) => {
    login.projectController.retrieveProjects(req, res);
})

router1.post('/', (req, res) => {
    login.projectController.createProjects_login(req, res);
})

module.exports = router1;