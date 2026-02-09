import backgroundRouter from "./router/BackgroundRouter.js";
import userRouter from "./router/UserRouter.js";
import characterRouter from "./router/CharacterRouter.js"
import attributesRouter from "./router/AttributesRouter.js"
import racesRouter from "./router/RaceRouter.js"
import classesRouter from "./router/ClassRouter.js"
import authRouter from "./router/AuthRouter.js"
import abilityRouter from "./router/AbilityRouter.js";
import skillsRouter from "./router/SkillsRouter.js"
import spellsRouter from "./router/SpellRouter.js"
import itemsRouter from "./router/ItemRouter.js"
import savingThrowsRouter from "./router/SavingThrowsRouter.js";
import app from "./server/server.js";

app.use("/users", userRouter);
app.use("/backgrounds", backgroundRouter)
app.use("/races", racesRouter)
app.use("/characters", characterRouter)
app.use("/attributes", attributesRouter)
app.use("/classes", classesRouter)
app.use("/auth", authRouter)
app.use("/abilities", abilityRouter);
app.use("/skills", skillsRouter)
app.use("/spells", spellsRouter)
app.use("/items", itemsRouter)
app.use("/savingThrows", savingThrowsRouter)

app.get('/', async (req, res) => {
  res.send('API is running');
});