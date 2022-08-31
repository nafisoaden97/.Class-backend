import express from "express";
import router from "./routes/router.js";
import cors from "cors";
const app = express();
const PORT = process.env.PGPORT || 9000;

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test working",
  });
});
app.use(cors());
app.use(express.json());
app.use("/profiles", router);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
