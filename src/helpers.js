/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}
//-----------------------------
/* Format card data*/
const formatCard = (response) => {
  return { image: response.data.cards[0].image };
};
//-----------------------------
// Format pokemon data
const formatPokemon = (response) => {
  const front = response.data.sprites.front_default;
  const back = response.data.sprites.back_default;
  const { id, name, stats } = response.data;
  return { id, front, back, name, stats };
};
export { choice, formatCard, formatPokemon };
