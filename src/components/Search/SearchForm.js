import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [keyword, setKeyword] = useState("");

  const onSearchKeyword = (e) => {
    const { value } = e.target;
    setKeyword(() => value);
    props.onSearch(value);
  };

  return (
    <div className={styles.searchForm}>
      <label htmlFor="search_input"></label>
      <input
        type="text"
        name="search"
        id="search_input"
        value={keyword}
        placeholder="포켓몬을 검색해보세요!"
        onChange={onSearchKeyword}
      />
    </div>
  );
};

export default SearchForm;
