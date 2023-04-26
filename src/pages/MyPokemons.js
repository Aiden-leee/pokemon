import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DivisionLayout from "components/Layouts/Division";
import PageContent from "components/Layouts/PageContent";
import PokemonCardList from "components/PokemonCard/PokemonCardList";
import PokemonList from "components/PokemonCard/PokemonList";
import Modal from "UI/Modal";
import main_bg from "assets/images/pokemon_bg.jpg";

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
