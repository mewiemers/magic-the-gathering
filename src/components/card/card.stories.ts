import "./card.css";
import { createCard } from "./card";
import { getCard, ImageCard, getCards, Card } from "../../utils/api";
import { createElement } from "../../utils/createElements";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};
//one Card

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
//more Cards

type cardFromAPIfilterProps = {
  loaded: {
    cards: ImageCard[];
  };
};

export const CardsFromAPI = (
  args,
  { loaded: { cards } }: cardFromAPIfilterProps
) => {
  const input = createElement("input", {
    onchange: async () => {
      const newCards = await getCards(input.value);
      const newMgcs = newCards.map((magicTG) => createCard(magicTG));
      mgcContainer.innerHTML = "";
      mgcContainer.append(...newMgcs);
    },
  });

  const mgcContainer = createElement("div", {
    className: "container",
    childs: cards.map((magicTG) => createCard(magicTG)),
  });
  const container = createElement("div", {
    className: "",
    childs: [input, mgcContainer],
  });
  return container;
};

CardsFromAPI.loaders = [
  async () => ({
    cards: await getCards(),
  }),
];

export const staticMagic = () =>
  createCard({
    card: {
      image:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130483&type=card",
      name: "Abundance",
      type: "Enchantment",
      text:
        "If you would draw a card, you may instead choose land or nonland and reveal cards from the top of your library until you reveal a card of the chosen kind. Put that card into your hand and put all other cards revealed this way on the bottom of your library in any order.",
      color: "Green",
      mid: 130483,
    },
  });

// export const randomPokemon = () => {
//   const randomButton = createElement("button", {
//     innerText: "Load random base set pokemon",
//     onclick: async () => {
//       const rdmNr = getRandom(0, 70);
//       const pkm = await getRdmBase(rdmNr);
//       console.log(pkm);
//       const rdmCard = createCard(pkm);

//       if (container.childNodes.length > 1) {
//         container.removeChild(container.lastChild);
//       }
//       container.append(rdmCard);
//     },
//   });

//   const container = createElement("div", {
//     className: "container",
//     childs: [randomButton],
//   });
//   return container;
// };

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
