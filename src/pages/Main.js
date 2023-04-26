import React, { Suspense, useState } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import DivisionLayout from "components/Layouts/Division";
import PageContent from "components/Layouts/PageContent";
import PokemonList from "components/PokemonCard/PokemonList";
import PokemonCardList from "components/PokemonCard/PokemonCardList";
import Modal from "UI/Modal";
import ReactLoading from "react-loading";
import main_bg from "assets/images/pokemon_bg.jpg";

const MainPage = () => {
  const [currentName, setCurrentName] = useState("이상해씨");
  const [currentPokemon, setCurrentPokemon] = useState();
  const { loadPokemons } = useRouteLoaderData("root");
  const [isShow, setIsShow] = useState(false);
  const LoadingComponent = <ReactLoading type="spin" />;

  const onSelectPokemon = (pokemon) => {
    setIsShow(true);
    const pokemon_info = loadPokemons.find((item) => item.name === pokemon);
    setCurrentPokemon(() => pokemon_info);
    setCurrentName(() => pokemon_info.name);
  };

  const onConfirm = () => {
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <Modal name={currentName} data={currentPokemon} onConfirm={onConfirm} />
      )}
      <PageContent background={main_bg}>
        <DivisionLayout>
          <PokemonCardList width="100%" maxWidth="600px">
            <Suspense fallback={LoadingComponent}>
              <Await resolve={loadPokemons}>
                {(loadEvents) => (
                  <PokemonList
                    pokemons={loadEvents}
                    onSelectPokemon={onSelectPokemon}
                  />
                )}
              </Await>
            </Suspense>
          </PokemonCardList>
        </DivisionLayout>
      </PageContent>
    </>
  );
};

export default MainPage;
