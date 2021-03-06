import { createElement } from "../../utils/createElements";
import { ImageCard } from "../../utils/api";

function colorToEmoji(color) {
  console.log(color);
  let colorreturn = "";
  switch (color) {
    case "White":
      colorreturn = "🌞";
      break;
    case "Red":
      colorreturn = "🔥";
      break;
    case "Green":
      colorreturn = "🌳";
      break;
    case "Blue":
      colorreturn = "💧";
      break;
    case "Black":
      colorreturn = "💀";
      break;
    default:
      colorreturn = "😁";
  }
  return colorreturn;
}

export function createCard({ image, name, type, text, color }) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("h4", {
        innerText: colorToEmoji(color),
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
      createElement("div", {
        className: "card__con",
        childs: [
          createElement("article", {
            className: "card__text",
            innerText: text,
          }),
        ],
      }),

      //   createElement("section", {
      //     className: "card__language",
      //     innerText: foreignNames.language,
      //   }),
    ],
  });
}
