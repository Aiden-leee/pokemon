import styles from "./PokemonCard.module.css";
import { pokemonTypesTransform } from "../utils/pokemonTypesTransform";
import { TbTrashX } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pocketActions } from "../store/pocket-slice";

const PokemonCard = ({ pokemon, confirm }) => {
  const location = useLocation();
  const dispatch = useDispatch();

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

  const onDelete = () => {
    if (window.confirm(`${pokemon.name} 을(를) 버리겠습니까?`)) {
      dispatch(pocketActions.abandonPokemon(pokemon.name));
      confirm();
    }
  };

  const deleteButton =
    location.pathname === "/mypokemons" ? (
      <button onClick={onDelete}>
        <TbTrashX size={20} color="#6a4600" />
      </button>
    ) : (
      ""
    );

  return (
    <>
      <div className={styles.pokemonCardContent}>
        <div className={styles.pokemonCardContentWrap}>
          <div className={styles.pokeBox}>
            <img src={pokemon.image} alt={pokemon.name} />
            {deleteButton}
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
