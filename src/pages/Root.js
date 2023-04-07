import { defer, json, Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

async function initPokemon() {
  const limit = 150;
  const urls = [];
  const otherUrls = [];

  for (let i = 1; i <= limit; i++) {
    let url = fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    urls.push(url);
  }

  for (let i = 1; i <= limit; i++) {
    let url = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    otherUrls.push(url);
  }

  // 1
  const allResponse = await Promise.all(urls).catch((error) => {
    throw json({ message: "Could not fetch" }, { status: 500 });
  });

  const allData = await Promise.all(allResponse.map((res) => res.json())).catch(
    (error) => {
      throw json({ message: "Could not fetch" }, { status: 500 });
    }
  );

  //2
  const other = await Promise.all(otherUrls).catch((error) => {
    throw json({ message: "Could not fetch" }, { status: 500 });
  });

  const otherData = await Promise.all(other.map((res) => res.json())).catch(
    (error) => {
      throw json({ message: "Could not fetch" }, { status: 500 });
    }
  );

  const pokemonAttr = otherData.map((attr) => {
    return {
      weight: attr.weight,
      height: attr.height,
      types: attr.types,
    };
  });

  const characters = allData.map((data, index) => {
    return data.flavor_text_entries.filter(
      (item) => item.language.name === "ko"
    );
  });

  const pokemons = allData.map((data, index) => {
    return {
      id: index + 1,
      name: data.names[2].name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1
      }.png`,
      geners: data.genera[1].genus,
      characters: characters[index],
      weight: pokemonAttr[index].weight,
      height: pokemonAttr[index].height,
      types: pokemonAttr[index].types,
    };
  });

  return pokemons;
}

export async function loader({ params }) {
  // const pokeId = params.pokeId;
  return defer({
    loadPokemons: await initPokemon(),
  });
}
