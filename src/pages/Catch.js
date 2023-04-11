import React, { useCallback, useEffect, useState } from "react";
import PageContent from "../components/PageContent";
import main_bg from "../assets/images/pokemon_bg.jpg";
import EncounterScreen from "../components/EncounterScreen";
import DivisionLayout from "../components/Division";
import DiceBattle from "../components/DiceBattle";
import { useRouteLoaderData } from "react-router-dom";

const CatchPage = () => {
  const { loadPokemons } = useRouteLoaderData("root");
  const [wildPokemon, setWildPokemon] = useState();
  const [isRefresh, setIsRefresh] = useState(false);
  const [isbattlingStatus, setIsBattlingStatus] = useState(false);

  const randomWildPokemon = useCallback(() => {
    const random = Math.ceil(Math.random() * 150);
    const targetWildPokemon = loadPokemons.find((item) => item.id === random);
    setWildPokemon(() => targetWildPokemon);
  }, [loadPokemons]);

  const onRefresh = useCallback(() => {
    randomWildPokemon();
    setIsRefresh(true);
  }, [randomWildPokemon]);

  useEffect(() => {
    randomWildPokemon();
    return () => {
      onRefresh();
    };
  }, [randomWildPokemon, onRefresh]);

  return (
    <PageContent background={main_bg}>
      <DivisionLayout className="column">
        {wildPokemon && (
          <EncounterScreen
            targetPokemon={wildPokemon}
            refresh={onRefresh}
            isbattlingStatus={isbattlingStatus}
          />
        )}
        {wildPokemon && (
          <DiceBattle
            targetPokemon={wildPokemon}
            isRefresh={isRefresh}
            setIsRefresh={setIsRefresh}
            setIsBattlingStatus={setIsBattlingStatus}
          />
        )}
      </DivisionLayout>
    </PageContent>
  );
};

export default CatchPage;
