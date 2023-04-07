import { json } from "react-router-dom";
import { pocketActions } from "./pocket-slice";

export const fetchMyPokemons = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokemon-demo-96dd9-default-rtdb.firebaseio.com/pokemons.json"
      );
      if (!response.ok) {
        throw json({ message: "could not fetch" }, { status: 500 });
      }
      const resData = await response.json();
      return resData;
    };

    try {
      const data = await fetchData();

      dispatch(
        pocketActions.replaceState({
          myPokemons: data.myPokemons || [],
          totalPokemons: data.totalPokemons,
        })
      );
    } catch (error) {
      throw json({ message: "error......" }, { status: 500 });
    }
  };
};

// store 담기
export const fetchCatchThePokemon = (pokemon) => {
  return async (dispatch) => {
    const catchData = async () => {
      const response = await fetch(
        "https://pokemon-demo-96dd9-default-rtdb.firebaseio.com/pokemons.json",
        {
          method: "PUT",
          body: JSON.stringify({
            myPokemons: pokemon.myPokemons,
            totalPokemons: pokemon.totalPokemons,
          }),
        }
      );
      if (!response.ok) {
        throw json({ message: "could not fetch" }, { status: 500 });
      }
    };
    try {
      await catchData();
    } catch (error) {
      throw json({ message: "error......" }, { status: 500 });
    }
  };
};
