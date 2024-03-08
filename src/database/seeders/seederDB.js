import mongoose from "mongoose";
import { dbConection } from "../db.js";
import { generateControlUsers } from "./user.seeder.js";

const seederDB = async () => {
    try {
        const connect = await dbConection()
            await generateControlUsers()

            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                mongoose.disconnect()
            })
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.disconnect()
    }
}


seederDB()