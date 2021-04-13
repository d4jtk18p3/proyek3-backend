export const anonymousController = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Hello anonymous",
      data: "anonymous123",
    });
    //custom error example jika ingin throw error
    // const error = new Error("message nya apa");
    //   error.statusCode = 4xx;
    //   error.cause = `tulis cause nya apa`;
    //   throw error;
  } catch (error) {
    next(error);
  }
};
