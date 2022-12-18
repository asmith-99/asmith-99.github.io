import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoremIpsum } from "lorem-ipsum";
import seedrandom from "seedrandom";

const seededRNG = seedrandom("a seed for the rng.");

export const lorem = new LoremIpsum({
  random: seededRNG,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

console.log("A: Hi! Welcome to my console. Please enjoy your stay.");
