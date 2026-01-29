import backgroundRouter from "./router/BackgroundRouter.js";
import userRouter from "./router/UserRouter.js";
import app from "./server/server.js";

app.use("/users", userRouter);
app.use("/backgrounds", backgroundRouter)
app.use("/races", racesRouter)
app.use("/attributes", attributesRouter)

app.get('/', async (req, res) => {
  res.send('API is running');
});