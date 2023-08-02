import amqp from 'amqplib'
var channel, connection;
connectQueue()  // call the connect function

export async function connectQueue() {
    try {
        connection = await amqp.connect("amqp://rabbitmq:5672");
        channel    = await connection.createChannel()
        
        await channel.assertQueue("test-queue")
        
        channel.consume("test-queue", data => {
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);
        })
    } catch (error) {
        console.log(error);
    }
}