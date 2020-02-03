import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const MONGO: string = process.env["MONGO_CONNECT"];

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(MONGO, {
      useNewUrlParser: true
    });
  }

  private routes(): void {
    this.express.get("/health-check", (_, res) => {
      return res.send("Health Check");
    });
  }
}

export default new App().express;
