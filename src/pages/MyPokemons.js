import React, { useCallback, useState } from "react";

import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import PageContent from "../components/PageContent";
import PokemonCardList from "../components/PokemonCardList";
import PokemonList from "../components/PokemonList";

import { useSelector } from "react-redux";
import Modal from "../UI/Modal";

const MyPokemonsPage = () => {
  const { myPokemons } = useSelector((state) => state.myPocket);
  const [currentPokemon, setCurrentPokemon] = useState();
  const [currentName, setCurrentName] = useState("이상해씨");
  const [isShow, setIsShow] = useState(false);

  // const LoadingComponent = <ReactLoading type="spin" />;
  const onSelectPokemon = useCallback(
    (pokemon) => {
      setIsShow(true);
      const pokemon_info = myPokemons.find((item) => item.name === pokemon);

      console.log(pokemon_info);
      setCurrentPokemon(() => pokemon_info);
      setCurrentName(() => pokemon_info.name);
    },
    [myPokemons]
  );

  const onConfirm = () => {
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <Modal name={currentName} data={currentPokemon} onConfirm={onConfirm} />
      )}
      <PageContent background={main_bg}>
        <DivisionLayout direction="columns">
          <PokemonCardList title="My Pokemons">
            {myPokemons && (
              <PokemonList
                pokemons={myPokemons}
                onSelectPokemon={onSelectPokemon}
              />
            )}
          </PokemonCardList>
        </DivisionLayout>
      </PageContent>
    </>
  );
};

export default MyPokemonsPage;

// async function loadPoke(pokeId) {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//   const initPoke = pokeId || 1;
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${initPoke}`);
//   if (!response.ok) {
//     return json({ message: "Could not fetch" }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     if (isMobile || window.innerWidth < 768) {
//       window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
//     }
//     return resData;
//   }
// }

// async function loadMyPokemon() {
//   const response = await fetch(
//     "https://pokemon-demo-96dd9-default-rtdb.firebaseio.com/pokemons.json"
//   );
//   if (!response.ok) {
//     throw json({ message: "could not fetch" }, { status: 500 });
//   }

//   const resData = await response.json();
//   console.log(resData);
//   return resData;
// }

// export async function loader({ params }) {
//   const pokeId = params.pokeId;
//   return defer({
//     myPokemons: await loadMyPokemon(),
//     initPoke: loadPoke(pokeId),
//   });
// }
