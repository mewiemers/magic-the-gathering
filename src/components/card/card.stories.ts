import "./card.css";
import { createCard } from "./card";
import { getCard, ImageCard } from "../../utils/api";

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
