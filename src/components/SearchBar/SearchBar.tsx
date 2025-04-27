"use client";

import type React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import type { SearchBarProps } from "../../types/SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Please enter a search term", {
        duration: 2000,
      });
      return;
    }
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <header className={css.searchBar}>
      <h1 className={css.title}>Photo Explorer</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.inputSearch}
          name="search"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search for amazing photos..."
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
