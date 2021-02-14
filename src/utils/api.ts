//Scheme from Magic-the-gathering

export type Card = {
  card: {
    name: string;
    colors: "White" | "Blue" | "Green" | "Red" | "Black";
    type: string;
    multiverseid: number;
    text: string;
    imageUrl: string;
  };
};
//what I need from API
export type ImageCard = {
  card: {
    name: string;
    image: string;
    text: string;
    type: string;
    color: "White" | "Blue" | "Green" | "Red" | "Black";
    mid: number;
  };
};

export type ImageCards = {
  cards: Card[];
};

//convert to my special names
function convertToImage(imageCard: Card): ImageCard {
  return {
    card: {
      image: imageCard.imageUrl,
      name: imageCard.name,
      color: imageCard.colors,
      mid: imageCard.multiverseid,
      text: imageCard.text,
      type: imageCard.type,
    },
  };
}

export async function getCard() {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards/600`);
  const result = (await response.json()) as Card;
  console.log(result);
  const card = convertToImage(result.card);

  return card;
}

export async function getCards(name: string) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${name}`
  );
  if (!response.ok) {
    return [];
  }
  const result = (await response.json()) as ImageCards;
  const characters = result.cards.map((imageCard) => {
    return convertToImage(imageCard);
  });
  return characters;
}
