import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import PageContent from "../components/PageContent";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import ReactLoading from "react-loading";
import PokemonCardList from "../components/PokemonCardList";
import PokemonCardBox from "../components/PokemonCardBox";

const ko_names = [];
const characters = [];
const geners = [];

const MainPage = () => {
  const { events, initPoke } = useLoaderData();
  const LoadingComponent = <ReactLoading type="spin" />;

  return (
    <PageContent background={main_bg}>
      <DivisionLayout>
        <PokemonCardList>
          <Suspense fallback={LoadingComponent}>
            <Await resolve={events}>
              {(loadEvents) => <PokemonList pokemons={loadEvents} />}
            </Await>
          </Suspense>
        </PokemonCardList>
        <PokemonCardBox pokemon={ko_names}>
          <Suspense fallback={LoadingComponent}>
            <Await resolve={initPoke}>
              {(Poke) => (
                <PokemonCard
                  pokemon={Poke}
                  konames={ko_names}
                  characters={characters}
                  geners={geners}
                />
              )}
            </Await>
          </Suspense>
        </PokemonCardBox>
      </DivisionLayout>
    </PageContent>
  );
};

export default MainPage;

async function loadPoke(pokeId) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const initPoke = pokeId || 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${initPoke}`);
  if (!response.ok) {
    return json({ message: "Could not fetch" }, { status: 500 });
  } else {
    const resData = await response.json();
    if (isMobile || window.innerWidth < 768) {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    return resData;
  }
}
// loading 지연 시키기
async function loadEvents() {
  const limit = 150;
  const urls = [];

  for (let i = 1; i <= limit; i++) {
    let url = fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    urls.push(url);
  }

  const allResponse = await Promise.all(urls);
  const allData = await Promise.all(allResponse.map((res) => res.json()));
  // console.log(allData);
  allData.forEach((pokemon) => {
    ko_names.push(pokemon.names[2].name);
    characters.push(pokemon.flavor_text_entries[23].flavor_text);
    geners.push(pokemon.genera[1].genus);
  });

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  if (!response.ok) {
    return json({ message: "Could not fetch" }, { status: 500 });
  } else {
    const resData = await response.json();
    const pokemons = resData.results.map((pokemon, index) => {
      return {
        id: index + 1,
        name: ko_names[index],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      };
    });
    return pokemons;
  }
}

export async function loader({ params }) {
  const pokeId = params.pokeId;
  return defer({
    events: await loadEvents(),
    initPoke: loadPoke(pokeId),
  });
}