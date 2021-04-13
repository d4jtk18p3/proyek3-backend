let anonymousController = (req, res) => {
  // res.send("Hello anonymous");
  res.status(200).json({
    message: "Hello anonymous",
    data: "anonymous123",
  });
};

export { anonymousController };
