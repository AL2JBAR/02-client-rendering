import Deck from "./base/deck.js";

Deck.prototype.render = function (element, callback) {

  const container = document.createElement("section");
  container.className = "deck";

  const header = document.createElement("div");
  header.className = "header";

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = this.title;

  header.appendChild(title);
  container.appendChild(header);

  const slidesContainer = document.createElement("div");
  slidesContainer.className = "slides";

  this.slides.forEach(slide => {
    slide.render(slidesContainer, callback);
  });

  container.appendChild(slidesContainer);
  element.appendChild(container);

  return container;
};

export default Deck;