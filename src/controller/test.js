let anonymousController = (req, res) => {
    res.send("Hello anonymous");
};

let userController = (req, res) => {
    res.send("Hello user");
};

let adminController = (req, res) => {
    res.send("Hello admin");
};

let alluserController = (req, res) => {
    res.send("Hello all user");
};

module.exports = {
    anonymousController,
    userController,
    adminController,
    alluserController
}