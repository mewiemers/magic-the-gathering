import { createElement } from "../../utils/createElements";
import { ImageCard } from "../../utils/api";

function colorToEmoji(color) {
  console.log(color);
  let colorreturn = "";
  switch (color) {
    case "White":
      colorreturn = "☀";
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

export function createCard({
  card: { image, name, type, text, color },
}: ImageCard) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("h4", {
        innerText: colorToEmoji(color[0]),
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
