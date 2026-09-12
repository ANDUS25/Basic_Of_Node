// event is nothing but a piece of code which is triggered when some action happens. No need to create a function again and again

import EventEmitter from "events";

const emitter = new EventEmitter();

// on means initiate a function
// user - Login is an event/function name;
emitter.on("user-Login", ({ name, password }) => {
  console.log(`User Logged In ${name} with password ${password}`);
});

// emit meaning listening a function with parameter, we can pass them without object
emitter.emit("user-Login", { name: "Anand", password: "12345" });
