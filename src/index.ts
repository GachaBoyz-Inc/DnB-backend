import backgroundRouter from "./router/BackgroundRouter.js";
import userRouter from "./router/UserRouter.js";
import characterRouter from "./router/CharacterRouter.js"
import attributesRouter from "./router/AttributesRouter.js"
import racesRouter from "./router/RaceRouter.js"
import classesRouter from "./router/ClassRouter.js"
import app from "./server/server.js";

app.use("/users", userRouter);
app.use("/backgrounds", backgroundRouter)
app.use("/races", racesRouter)
app.use("/characters", characterRouter)
app.use("/attributes", attributesRouter)
app.use("/classes", classesRouter)

app.get('/', async (req, res) => {
  res.send('API is running');
});