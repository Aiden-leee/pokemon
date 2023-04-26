import React, { useCallback, useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import PageContent from "components/Layouts/PageContent";
import DivisionLayout from "components/Layouts/Division";
import EncounterScreen from "components/EncounterScreen/EncounterScreen";
import DiceBattle from "components/DiceBattle/DiceBattle";
import main_bg from "assets/images/pokemon_bg.jpg";

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
