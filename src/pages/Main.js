import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import PageContent from "../components/PageContent";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import ReactLoading from "react-loading";
import PokemonCardList from "../components/PokemonCardList";
import PokemonCardBox from "../components/PokemonCardBox";

const MainPage = () => {
  const [currentName, setCurrentName] = useState("이상해씨");
  const [currentPokemon, setCurrentPokemon] = useState();
  const { loadPokemons } = useRouteLoaderData("root");
  const LoadingComponent = <ReactLoading type="spin" />;

  const onSelectPokemon = useCallback(
    (pokemon) => {
      const pokemon_info = loadPokemons.find((item) => item.name === pokemon);
      setCurrentPokemon(() => pokemon_info);
      setCurrentName(() => pokemon_info.name);
    },
    [loadPokemons]
  );

  useEffect(() => {
    onSelectPokemon("이상해씨");
  }, [onSelectPokemon]);

  return (
    <PageContent background={main_bg}>
      <DivisionLayout>
        <PokemonCardList width="50%">
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
        <PokemonCardBox width="50%" currentName={currentName}>
          {currentPokemon && <PokemonCard pokemon={currentPokemon} />}
        </PokemonCardBox>
      </DivisionLayout>
    </PageContent>
  );
};

export default MainPage;
