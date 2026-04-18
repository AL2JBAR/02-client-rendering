import "../cards/playing-card.js";
import "../cards/foreign-word.js";
import "../cards/string-list.js";

import "./card.js";   

import "./slide.js";
import "./deck.js";

import { load, render } from "./collection.js";

await load();
render(document.body);