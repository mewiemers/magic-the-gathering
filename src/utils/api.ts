//Scheme from Magic-the-gathering

export type Card = {
  card: {
    name: string;
    colors: string[];
    type: string;
    multiverseid: number;
    text: string;
    imageUrl: string;
    // foreignNames: {
    //   name: string;
    //   language: string;
    // };
  };
};
//what I need from API
export type ImageCard = {
  card: {
    image: string;
    text: string;
    type: string;
    name: string;
    // color: string[];
    mid: number;
    // foreignNames: {
    //   language: string;
    // };
  };
};

function convertToImage(imageCard: Card): ImageCard {
  return {
    card: {
      image: imageCard.card.imageUrl,
      name: imageCard.card.name,
      // color: imageCard.colors,
      mid: imageCard.card.multiverseid,
      text: imageCard.card.text,
      type: imageCard.card.type,
      // foreignNames: { language: imageCard.foreignNames.language },
    },
  };
}

export async function getCard() {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards/600`);
  const result = (await response.json()) as Card;
  console.log(result);
  const card = convertToImage(result);
  return card;
}

// export async function getCharacters() {
//   const response = await fetch(`https://api.magicthegathering.io/v1/cards`);
//   const result = (await response.json()) as ImageCard;
//   const characters = result.results.map((apiCharacter) =>
//     convertToImage(apiCharacter)
//   );
//   return characters;
// }
