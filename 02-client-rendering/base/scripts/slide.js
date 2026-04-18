import Slide from "./base/slide.js";

Slide.prototype.render = function (element, callback) {

  const container = document.createElement("section");
  container.className = "slide";

  const header = document.createElement("div");
  header.className = "header";

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = this.title;

  header.appendChild(title);
  container.appendChild(header);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards";

  this.cards.forEach(card => {
    card.render(cardsContainer, callback);
  });

  container.appendChild(cardsContainer);
  element.appendChild(container);

  return container;
};

export default Slide;