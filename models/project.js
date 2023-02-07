let client = require("../dbConnect");
const dbo = client.db("project").collection("customers_test");
const dbo1 = client.db("project").collection("card_details");
const dbo2 = client.db("project").collection("payment_details");
const dbo3 = client.db("project").collection("order");

let signup = require("../models/signup_validation");
let login = require("../models/login_validation");
let payment = require("../models/payment_verification");
let order = require("../models/order_summary");

let projectCollection;

setTimeout(() => {
    projectCollection = dbo;
}, 2000)

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const checksignup =  (req, res) =>{
    signup(req, res, dbo);
}

const checklogin =  (req, res) =>{
    login(req, res, dbo);
}

const checkpayment =  (req, res) =>{
    payment(req, res, dbo1, dbo2);
}

const checkorder =  (req, res) =>{
    order(req, res, dbo3);
}

module.exports = {checksignup, checklogin, checkpayment, checkorder,  getProjects}