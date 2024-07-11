import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/models/index.js"
//require("./app/routes/data.routes").default(app);
import router from "./app/routes/data.routes.js"
import { config } from 'dotenv';

config();

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle, baby!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
