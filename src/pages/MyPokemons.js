import React, { useEffect, useState } from "react";
import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import PageContent from "../components/PageContent";
import PokemonCardList from "../components/PokemonCardList";
import PokemonList from "../components/PokemonList";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";

const MyPokemonsPage = () => {
  const { myPokemons } = useSelector((state) => state.myPocket);
  const [myPokeList, setMyPokeList] = useState();
  const [currentPokemon, setCurrentPokemon] = useState();
  const [currentName, setCurrentName] = useState("이상해씨");
  const [isShow, setIsShow] = useState(false);

  const onSelectPokemon = (pokemon) => {
    setIsShow(true);
    const pokemon_info = myPokemons.find((item) => item.name === pokemon);
    setCurrentPokemon(() => pokemon_info);
    setCurrentName(() => pokemon_info.name);
  };

  const onConfirm = () => {
    setIsShow(false);
  };

  useEffect(() => {
    if (myPokemons) {
      setMyPokeList(myPokemons);
    }
  }, [myPokemons]);

  return (
    <>
      {isShow && (
        <Modal name={currentName} data={currentPokemon} onConfirm={onConfirm} />
      )}
      <PageContent background={main_bg}>
        <DivisionLayout direction="columns">
          <PokemonCardList title="My Pokemons" width="100%" maxWidth="400px">
            {myPokeList && (
              <PokemonList
                pokemons={myPokeList}
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
