const amqp = require('amqplib')
const config = require('../config/rabbit')

class Consumer {
    async consumeMessage() {
        const connection = await amqp.connect(config.rabbitMQ.url)
        const channel = await connection.createChannel();
        const exchangeName = config.rabbitMQ.exchangeName;
        await channel.assertExchange(exchangeName, "direct");

        const q = await channel.assertQueue("UserQueue");
        await channel.bindQueue(q.queue, exchangeName, "Signup");
        channel.consume(q.queue, (msg) => {
            const data = JSON.parse(msg.content);
            console.log(data);
            channel.ack(msg);
            
        });
    }

}
module.exports = Consumer;