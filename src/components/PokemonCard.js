import styles from "./PokemonCard.module.css";
import { pokemonTypesTransform } from "../utils/pokemonTypesTransform";
const PokemonCard = ({ pokemon, konames, characters, geners }) => {
  const id = pokemon.id - 1;
  const transformKg = (pokemon.weight * 0.1).toFixed(1);
  const transformHeight = (pokemon.height * 0.1).toFixed(1);

  const types = pokemon.types.map((type) => (
    <div className={styles.types} key={type.type.name}>
      {
        <div
          style={{ background: pokemonTypesTransform(type.type.name).color }}
        >
          {pokemonTypesTransform(type.type.name)[type.type.name]}
        </div>
      }
    </div>
  ));
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
            <h2>{konames[id]}</h2>
            <div className={styles.pokeContentWrap}>
              <div className={styles.pokeContentCharacter}>
                {characters[id]}
              </div>
              <div className={styles["descriptions-wrap"]}>
                <div className="">
                  <h3>타입</h3>
                  <div className={styles.desc}>{types}</div>
                </div>
                <div>
                  <h3>분류</h3>
                  <div className={styles.desc}>{geners[id]}</div>
                </div>
                <div>
                  <h3>무게</h3>
                  <div className={styles.desc}>{transformKg}kg</div>
                </div>
                <div>
                  <h3>키</h3>
                  <div className={styles.desc}>{transformHeight}m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// pokemon.sprites.other["official-artwork"].front_default
export default PokemonCard;
