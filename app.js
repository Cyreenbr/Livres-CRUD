import express from "express";
import routerLivre from "./routes/livres.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use("/api/livres", routerLivre);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/isamm")
  .then(function () {
    console.log("connection success");
  })
  .catch(function (e) {
    console.log("not connected", e);
  });
export default app;
