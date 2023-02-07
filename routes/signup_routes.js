let express = require("express");
var router = express.Router();
let signup = require("../controller")

router.get('/',(req, res) => {
    signup.projectController.retrieveProjects(req, res);
})

router.post('/', (req, res) => {
    signup.projectController.createProjects_signup(req, res);
})

module.exports = router;