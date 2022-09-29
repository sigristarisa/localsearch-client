import React from "react";
import SearchResult from "../src/Components/SearchResult/SearchResult";
import SearchBar from "../src/Components/SearchBar/SearchBar";

const App: React.FC = () => {
  return (
    <main className='App place-items_center'>
      <SearchResult />
      <SearchBar />
    </main>
  );
};

export default App;
