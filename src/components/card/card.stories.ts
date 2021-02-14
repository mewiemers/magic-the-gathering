import "./card.css";
import { createCard } from "./card";
import { getCard, ImageCard } from "../../utils/api";
import { createElement } from "../../utils/createElements";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

type blacklotus = {
  loaded: {
    card: ImageCard;
  };
};

export const CardFromAPI = (args, { loaded: { card } }: blacklotus) => {
  return createCard(card);
};
CardFromAPI.loaders = [
  async () => ({
    card: await getCard(),
  }),
];

export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

// CharactersFromAPI.loaders = [
//   async () => ({
//     characters: await getCharacters(),
//   }),
// ];
