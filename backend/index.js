import mongoose from "mongoose";
import express from "express"
import cors from "cors"

mongoose.connect("mongodb+srv://llsiddharthll:BaQWoJ7NlUQXIbns@cluster0.plq0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("database Connected")})
.catch((e)=>{console.log("Database Error: ", e)})

const app = express()

app.use(express.json())
app.use(cors())

