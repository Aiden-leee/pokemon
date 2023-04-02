import styles from "./PokemonCard.module.css";

const PokemonCard = ({ pokemon, konames }) => {
  return (
    <>
      <div className={styles.pokemonCardContent}>
        <div className={styles.pokemonCardContentWrap}>
          <div className={styles.pokeBox}>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </div>
          <div className={styles.pokeContent}>
            <h2>{konames[pokemon.id - 1]}</h2>
            <div>
              <span>무게</span>
              {pokemon.weight}kg
            </div>
            <div>
              <span>키</span>
              {pokemon.height}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// pokemon.sprites.other["official-artwork"].front_default
export default PokemonCard;
