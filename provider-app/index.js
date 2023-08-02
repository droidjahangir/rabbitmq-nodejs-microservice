import express from 'express'
import { sendData, connectQueue } from './mqService.js'

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());
connectQueue()

app.get("/send-msg", (req, res) => {
  // data to be sent
  const data = {
    title: "Six of Crows",
    author: "Leigh Burdugo",
  };
  sendData(data); // pass the data to the function we defined
  console.log("A message is sent to queue");
  res.send("Message Sent"); //response to the API request
});
app.listen(PORT, () => console.log("Server running at port " + PORT));
