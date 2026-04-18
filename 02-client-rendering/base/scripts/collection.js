import Deck from "./deck.js";

let decks=[];

export async function load(){

let saved=
localStorage.getItem("decks");

if(saved){

decks=
JSON.parse(saved)
.map(d=>Deck.fromJSON(d));

return;

}

let response=
await fetch("./data/collection.json");

let data=
await response.json();

decks=
data.map(d=>Deck.fromJSON(d));

save();

}


export function save(){

localStorage.setItem(
"decks",
JSON.stringify(
decks.map(d=>d.toJSON())
)
);

}


function callback(event,id){

save();

}


export function render(element){

element.innerHTML="";

decks.forEach(deck=>{

deck.render(
element,
callback
);

});

}