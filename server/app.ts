import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as path from "path";
import "./database/db";
import dataEntryRoutes from "./routes/data-entry.route";
import totalEnergyRoutes from "./routes/total-energy.route";
import co2Routes from "./routes/co2.route";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        mediaSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"]
      }
    }
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../dist"));

// Routes
app.use("/api/dataentries", dataEntryRoutes);
app.use("/api/energy", totalEnergyRoutes);
app.use("/api/co2", co2Routes);

app.all("*", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname + "/../dist/index.html"));
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.json({ message: err.name + ": " + err.message });
  } else {
    // Forward to error handler
    next(err);
  }
});

// error handler for files
app.use((err, req, res, next) => {
  if (err.message === "Wrong file format") {
    res.status(400).json({ message: err.message });
  } else {
    // Forward to error handler
    next(err);
  }
});

// Universal error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.sendStatus(500);
});

process.on("unhandledRejection", r => console.log(r));

app.listen(PORT, () => {
  console.log("[Listening on port]", PORT);
});
