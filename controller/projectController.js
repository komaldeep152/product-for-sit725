let projectModel = require('../models/project');

const createProjects_signup = (req, res) => {
    projectModel.checksignup(req, res);
}

const createProjects_login = (req, res) => {
    projectModel.checklogin(req, res);
}

const createProjects_payment = (req, res) => {
    projectModel.checkpayment(req, res);
}

const createProjects_order = (req, res) => {
    projectModel.checkorder(req, res);
}

const retrieveProjects = (req, res) => {
    projectModel.getProjects((err, result) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
}



module.exports = {createProjects_signup, createProjects_login, createProjects_payment, createProjects_order, retrieveProjects}