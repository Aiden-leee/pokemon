import React from "react";
import DivisionLayout from "../components/Division";
import PageContent from "../components/PageContent";
import main_bg from "../assets/images/pokemon_bg.jpg";
import PokemonCardList from "../components/PokemonCardList";
import User from "../components/User";

const MyPage = () => {
  return (
    <PageContent background={main_bg}>
      <DivisionLayout>
        <PokemonCardList title="MyPage" maxWidth="400px">
          <User />
        </PokemonCardList>
      </DivisionLayout>
    </PageContent>
  );
};

export default MyPage;
