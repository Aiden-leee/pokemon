import React from "react";
import DivisionLayout from "components/Layouts/Division";
import PageContent from "components/Layouts/PageContent";
import PokemonCardList from "components/PokemonCard/PokemonCardList";
import User from "components/Auth/User";
import main_bg from "assets/images/pokemon_bg.jpg";

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
