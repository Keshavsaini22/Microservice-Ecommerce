const amqp = require('amqplib')
const config = require('../config/rabbit')

class Consumer {
    async consumeMessage() {
        const connection = await amqp.connect(config.rabbitMQ.url)
        const channel = await connection.createChannel();

        await channel.assertExchange("orderExchange", "direct");
        await channel.assertExchange("authExchange", "direct");
        await channel.assertExchange("cartExchange", "direct");

        const order = await channel.assertQueue("OrderQueue");
        const cart = await channel.assertQueue("CartQueue");
        const user = await channel.assertQueue("UserQueue");

        await channel.bindQueue(order.queue, "orderExchange", "Order");
        await channel.bindQueue(cart.queue, "authExchange", "Cart");
        await channel.bindQueue(user.queue, "cartExchange", "Signup");

        channel.consume(order.queue, (msg) => {
            const data = JSON.parse(msg.content);
            console.log(data);
            channel.ack(msg);

        });
        channel.consume(cart.queue, (msg) => {
            const data = JSON.parse(msg.content);
            console.log(data);
            channel.ack(msg);

        });
        channel.consume(user.queue, (msg) => {
            const data = JSON.parse(msg.content);
            console.log(data);
            channel.ack(msg);

        });
    }

}
module.exports = Consumer;