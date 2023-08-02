// const amqp = require("amqplib");
import amqp from 'amqplib'

export async function sendData(data) {
  // send data to queue
  await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));

  // close the channel and connection
  await channel.close();
  await connection.close();
}

var channel, connection;  //global variables
export async function connectQueue() {   
    try {
        connection = await amqp.connect("amqp://rabbitmq:5672");
        channel    = await connection.createChannel()
        
        await channel.assertQueue("test-queue")
        
    } catch (error) {
        console.log(error)
    }
}