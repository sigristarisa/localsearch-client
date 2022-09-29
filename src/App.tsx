import React, { useState } from "react";
import SearchResult from "./Components/SearchResult/SearchResult";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Response } from "./helpers/types";

const App: React.FC = () => {
  const [responseData, setResponseData] = useState<Response>();

  console.log(responseData);

  return (
    <main className='App place-items_center'>
      <SearchResult />
      <SearchBar setReponseData={setResponseData} />
    </main>
  );
};

export default App;
