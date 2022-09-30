import React, { useRef } from "react";
import searchIcon from "../../assets/magnifying-glass.png";
import "./SearchBar.css";

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
    <form
      ref={placeIdFormRef}
      onSubmit={submitPlaceIdForm}
      className='form_container align-self place-items_center'
    >
      <div className='input_container grid-columns-two_extend-one  place-items_center'>
        <input
          type='text'
          name='placeIdInput'
          placeholder='enter place id...'
          required
        />
        <button type='submit' className='submit-btn  place-items_center'>
          <img src={searchIcon} alt='search icon' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
