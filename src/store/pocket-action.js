import { json } from "react-router-dom";
import { pocketActions } from "./pocket-slice";

import { child, get, ref, set } from "firebase/database";
import { db } from "../auth/firebase";

export const requestThePokemon = (myPocket) => {
  return async (dispatch) => {
    const catched = () => {
      const uid = localStorage.getItem("uid");
      set(ref(db, "users/" + uid), {
        uid: uid,
        myPokemons: myPocket.myPokemons,
        totalPokemon: 1,
      });
    };
    try {
      catched();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyPokemons = (user) => {
  return (dispatch) => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          dispatch(
            pocketActions.replaceState({
              myPokemons: data.myPokemons || [],
              totalPokemons: data.totalPokemon,
              uid: data.uid,
            })
          );
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// 사용 x
export const fetchMyPokemons = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokemon-demo-96dd9-default-rtdb.firebaseio.com/users.json`
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

// 사용 x
// store 담기
export const fetchCatchThePokemon = (pokemon, user) => {
  return async (dispatch) => {
    const catchData = async () => {
      const response = await fetch(
        `https://pokemon-demo-96dd9-default-rtdb.firebaseio.com/users.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            [user.uid]: {
              myPokemons: pokemon.myPokemons,
              totalPokemons: pokemon.totalPokemons,
            },
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
