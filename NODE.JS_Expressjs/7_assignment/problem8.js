const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks for Subscribing to a ${channelName}`);
};

eventEmitter.addListener("subscribe",subscribeMessage);
eventEmitter.emit("subscribe","College Wallah");