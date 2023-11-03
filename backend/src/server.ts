import express from "express";
import user from "./routes/user";
import api from "./api";
import cors from "cors";

//Types
declare global {
  namespace Express {
    interface Request {
      user?: string;
      admin?: string;
    }
  }
}


const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url);

  next();
});
//Types

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server running");
  require("child_process").exec("powershell.exe [console]::beep(500,600)");
});
