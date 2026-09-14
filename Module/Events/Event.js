// we can create an Event using the Event Emitter

import EventEmitter from "events";

const emitter = new EventEmitter();

// First we have register the event listerner using the `on` method. The first argument is the name of the event, and the second argument is a callback function that will be executed when the event is emitted.
emitter.on("greet", (name, extra) => {
  console.log(`Hello, ${name}! ${extra}`);
});

// and this is how we can emit the event using the `emit` method. The first argument is the name of the event, and the second argument is the data that we want to pass to the event listener.
emitter.emit("greet", "Anand", "How are you today?");

// -------------------------------------Tasks-------------------------

// 1. user loin event
emitter.on("user_login", (userName) => {
  console.log(`Hello ${userName} How are you doing today?`);
});

// 2. user purchase Event
emitter.on("user_purchase", (userName, item) => {
  console.log(`${userName} has purcahse this ${item}, Congradulation !!!`);
});

// 3. user logout event
emitter.on("user_logout", (userName) => {
  console.log(`Goodbye ${userName}, See you soon!`);
});

emitter.emit("user_login", "Anand");
emitter.emit("user_purchase", "Anand", "Laptop");
emitter.emit("user_logout", "Anand");
