import express from "express";
import 'dotenv/config'
import { dbConection } from "./database/db.js";

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4001


dbConection()
    .then(() => {
        console.log(`Database connected`);
        app.listen(
            process.env.PORT || 4001,
            () => {
                console.log(`server running on port ${PORT}`);
            })
    })
    .catch(error => { console.log(error) })


