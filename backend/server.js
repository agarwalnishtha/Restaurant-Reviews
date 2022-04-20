import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

//middlewares that express have to use //express.json is equivalent to bodyParser
app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);
app.use("*", (req,res) => res.status(404).json({error: "not found"})); 
//*means wildcard i.e. if someone tries to go to any other path except for one mentioned above

export default app;
//app is exported so that it can be imported inside the file made to connect to the database i.e. index.js
