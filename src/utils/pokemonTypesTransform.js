export const pokemonTypesTransform = (type) => {
  const pokemonTypes = [
    { normal: "노말", color: "#949495" },
    { fighting: "격투", color: "#df9c49" },
    { flying: "비행", color: "#a3c4e6" },
    { poison: "독", color: "#735396" },
    { ground: "땅", color: "#9b7747" },
    { rock: "바위", color: "#bfb88c" },
    { bug: "벌레", color: "#9fa14b" },
    { ghost: "고스트", color: "#68496f" },
    { steel: "강철", color: "#6caac6" },
    { fire: "불", color: "#e36c45" },
    { water: "물", color: "#5487c3" },
    { grass: "풀", color: "#68a84b" },
    { electric: "전기", color: "#f5d75d" },
    { psychic: "에스퍼", color: "#db6c7d" },
    { ice: "얼음", color: "#71c9e9" },
    { dragon: "드래곤", color: "#545ea6" },
    { dark: "악", color: "#4c4948" },
    { fairy: "페어리", color: "#d9b5d4" },
    { unknown: "???", color: "#b036b3" },
    { shadow: "그림자", color: "#7d7d7d" },
  ];
  const result = pokemonTypes.find((item) => item[type]);

  return result;
};
