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
    image: string;
    text: string;
    type: string;
    name: string;
    color: "White" | "Blue" | "Green" | "Red" | "Black";
    mid: number;
  };
};
//convert to my special names
function convertToImage(imageCard: Card): ImageCard {
  return {
    card: {
      image: imageCard.card.imageUrl,
      name: imageCard.card.name,
      color: imageCard.card.colors,
      mid: imageCard.card.multiverseid,
      text: imageCard.card.text,
      type: imageCard.card.type,
    },
  };
}

export async function getCard() {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards/60`);
  const result = (await response.json()) as Card;
  console.log(result);
  const card = convertToImage(result);
  return card;
}

// export async function getCharacters() {
//   const response = await fetch(`https://api.magicthegathering.io/v1/cards`);
//   if (!response.ok) {
//     return [];
//   }
//   const result = (await response.json()) as ImageCard;
//   const characters = result.card.map((apiCharacter) =>
//     convertToImage(apiCharacter)
//   );
//   return characters;
// }
