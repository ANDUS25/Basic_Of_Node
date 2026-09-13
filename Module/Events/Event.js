// We can create and handle custom events using EventEmitter in Node.js
import EventEmitter from "events";

const emitter = new EventEmitter();

// First we have register the event listerner using the `on` method. The first argument is the name of the event, and the second argument is a callback function that will be executed when the event is emitted.
emitter.on("greet", (name, extra) => {
  console.log(`Hello, ${name}! ${extra}`);
});

// and this is how we can emit the event using the `emit` method. The first argument is the name of the event, and the second argument is the data that we want to pass to the event listener.
emitter.emit("greet", "Anand", "How are you today?");
