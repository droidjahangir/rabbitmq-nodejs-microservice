import express from 'express'
import { connectQueue } from './mqService.js'
connectQueue()

const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());
app.listen(PORT, () => console.log("Server running at port " + PORT));

