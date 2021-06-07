//Scheme from Magic-the-gathering

export type Card = {
  name: string;
  colors: "White" | "Blue" | "Green" | "Red" | "Black";
  type: string;
  multiverseid: number;
  text: string;
  imageUrl: string;
};

//what I need from API
export type ImageCard = {
  card: Card[];
};

export type ImageCards = {
  cards: Card[];
};

// convert to my special names
function convertToImage(imageCard: Card): ImageCard {
  return {
    image: imageCard.imageUrl,
    name: imageCard.name,
    color: imageCard.colors[0],
    mid: imageCard.multiverseid,
    text: imageCard.text,
    type: imageCard.type,
  };
}

export async function getCard() {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards/600`);
  const result = (await response.json()) as ImageCard;
  console.log(result);
  const cardblacklotus = convertToImage(result.card);

  return cardblacklotus;
}

export async function getCards(name: string) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${name}`
  );
  if (!response.ok) {
    return [];
  }
  const result = (await response.json()) as ImageCards;
  const characters = result.cards.map((card) => convertToImage(card));

  return characters;
}
