import React from "react";
import { Response } from "../../helpers/types";
import "./ErrorInformation.css";

interface Props {
  responseData: Response;
}
const ErrorInformation: React.FC<Props> = ({ responseData }) => {
  return (
    <div className='error-information_container justify-items_center'>
      <h2>{responseData.message}</h2>
    </div>
  );
};

export default ErrorInformation;
