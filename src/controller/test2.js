let anonymousController2 = (req, res) => {
    res.send("Hello anonymous 2");
};

let userController2 = (req, res) => {
    res.send("Hello user 2");
};

let adminController2 = (req, res) => {
    res.send("Hello admin 2");
};

let alluserController2 = (req, res) => {
    res.send("Hello all user 2");
};


export { anonymousController2, userController2, adminController2, alluserController2};