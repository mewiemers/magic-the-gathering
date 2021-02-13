import { createElement } from "../../utils/createElements";

export function createCard({ image, name, color, type, text }) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("h4", {
        innerText: color,
      }),
      createElement("p", {
        className: "card__type",
        innerText: type,
      }),
      createElement("img", {
        className: "card__i",
        src: image,
        alt: "",
      }),
      createElement("article", {
        innerText: text,
      }),
      //   createElement("section", {
      //     className: "card__language",
      //     innerText: foreignNames.language,
      //   }),
    ],
  });
}
