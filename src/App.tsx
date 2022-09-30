import React, { useState } from "react";
import SearchResult from "./Components/SearchResult/SearchResult";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Response } from "./helpers/types";

const App: React.FC = () => {
  const [responseData, setResponseData] = useState<Response>({
    status: "",
    message: "",
  });

  return (
    <main className='App justify-items_center'>
      <SearchResult responseData={responseData} />
      <SearchBar setReponseData={setResponseData} />
    </main>
  );
};

export default App;
