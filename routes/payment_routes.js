let express = require("express");
var router2 = express.Router();
let login = require("../controller");

router2.get('/',(req, res) => {
    login.projectController.retrieveProjects(req, res);
})

router2.post('/', (req, res) => {
    login.projectController.createProjects_payment(req, res);
})

module.exports = router2;