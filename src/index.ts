import userRouter from "./router/UserRouter.js";
import app from "./server/server.js";

app.use("/users", userRouter);

app.get('/', async (req, res) => {
  res.send('API is running');
});