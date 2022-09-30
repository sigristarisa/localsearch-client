import React from "react";
import PlaceInformation from "../PlaceInformation/PlaceInformation";
import ErrorInformation from "../ErrorInformation/ErrorInformation";
import { Response } from "../../helpers/types";
import "./SearchResult.css";

interface Props {
  responseData: Response;
}

const SearchResult: React.FC<Props> = ({ responseData }) => {
  const responseKeys: string[] = Object.keys(responseData);
  const hasPlaceData = (): boolean => !responseKeys.includes("message");

  return (
    <div className='search-result_container'>
      {hasPlaceData() ? (
        <PlaceInformation responseData={responseData} />
      ) : (
        <ErrorInformation responseData={responseData} />
      )}
    </div>
  );
};

export default SearchResult;
