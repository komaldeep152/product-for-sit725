let express = require("express");
var router3 = express.Router();
let order = require("../controller");

router3.get('/',(req, res) => {
    order.projectController.retrieveProjects(req, res);
})

router3.post('/', (req, res) => {
    order.projectController.createProjects_order(req, res);
})

module.exports = router3;