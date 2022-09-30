import React from "react";
import { Response } from "../../helpers/types";

interface Props {
  responseData: Response;
}
const ErrorInformation: React.FC<Props> = ({ responseData }) => {
  return (
    <div>
      <p>Oops, nothing found :(</p>
      <p>{responseData.message}</p>
    </div>
  );
};

export default ErrorInformation;
