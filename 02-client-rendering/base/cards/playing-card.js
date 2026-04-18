import PlayingCard
from "../scripts/base/cards/playing-card.js";

PlayingCard.prototype.render=
function(element){

let div=
document.createElement("div");

div.classList.add("card");

div.textContent=
this.toString();

element.appendChild(div);

return div;

};

export default PlayingCard;