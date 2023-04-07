import styles from "./PokemonCard.module.css";
import { pokemonTypesTransform } from "../utils/pokemonTypesTransform";

const PokemonCard = ({ pokemon }) => {
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
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className={styles.pokeContent}>
            <h2>{pokemon.name}</h2>
            <div className={styles.pokeContentWrap}>
              <div className={styles.pokeContentCharacter}>
                {pokemon.characters[0].flavor_text}
              </div>
              <div className={styles["descriptions-wrap"]}>
                <div className="">
                  <h3>타입</h3>
                  <div className={styles.desc}>{types}</div>
                </div>
                <div>
                  <h3>분류</h3>
                  <div className={styles.desc}>{pokemon.geners}</div>
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

export default PokemonCard;
