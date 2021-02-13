import "./card.css";
import { createCard } from "./card";
import { getCard } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const CardFromAPI = (args, { loaded: { card } }) => {
  return createCard(card);
};
CardFromAPI.loaders = [
  async () => ({
    card: await getCard(600),
  }),
];
