import express from "express";
import router from "./routes/router.js";
const app = express();
const PORT = process.env.port || 3000;

app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test working",
    });
  });
  
  app.use(express.json());
  app.use("/profiles", router);
  
  app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
  });


