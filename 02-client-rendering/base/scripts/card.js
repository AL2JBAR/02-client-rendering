import Card from "./base/card.js";

Card.prototype.render = function (element, callback) {

  const container = document.createElement("div");
  container.className = "card";

  const content = document.createElement("div");
  content.className = "content";

  content.textContent = JSON.stringify(this.data);

  container.appendChild(content);

  element.appendChild(container);

  return container;
};

export default Card;