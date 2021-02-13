//Scheme from Magic-the-gathering

export type Card = {
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
//what I need from API
export type ImageCard = {
  image: string;
  text: string;
  type: string;
  name: string;
  color: string[];
  mid: number;
  // foreignNames: {
  //   language: string;
  // };
};

function convertToImage(imageCard: Card): ImageCard {
  return {
    image: imageCard.imageUrl,
    name: imageCard.name,
    color: imageCard.colors,
    mid: imageCard.multiverseid,
    text: imageCard.text,
    type: imageCard.type,
    //   foreignNames: { language: imageCard.foreignNames.language },
  };
}

export async function getCard(id: number) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards/${id}`
  );
  const result = (await response.json()) as Card;
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
