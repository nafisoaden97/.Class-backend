import express from "express";
import router from "./routes/router.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PGPORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/profiles", router);

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: `Test working ${PORT}`,
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
