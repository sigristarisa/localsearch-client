import React, { useRef } from "react";

interface Props {
  setReponseData: Function;
}

const SearchBar: React.FC<Props> = ({ setReponseData }) => {
  const placeIdFormRef = useRef<HTMLFormElement>(null);

  const submitPlaceIdForm = (e: React.FormEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      placeIdInput: { value: string };
    };
    const placeId: string = target.placeIdInput.value;

    // console.log(process.env.REACT_APP_API_URL);
    fetch(`http://localhost:4000/${placeId}`)
      .then((res) => res.json())
      .then((data) => setReponseData(data));
  };

  return (
    <form ref={placeIdFormRef} onSubmit={submitPlaceIdForm}>
      <input
        type='text'
        name='placeIdInput'
        placeholder='enter place id...'
        required
      />
      <input type='submit' />
    </form>
  );
};

export default SearchBar;
