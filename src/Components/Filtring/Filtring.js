import "./filtring.css";
import { useRef, useState } from "react";

export default function Filtring({ filter }) {
  let searchRef = useRef();
  const [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
    filter(searchRef.current.value, newRating);
    setRate(newRating);
  };

  function submitted(ev) {
    ev.preventDefault();
    filter(searchRef.current.value, rate);
  }

  return (
    <form className="searchform" onChange={submitted} onSubmit={submitted}>
      <h3> Netflixy </h3>
      <input
        ref={searchRef}
        className="form-control form-control-lg searchinp"
        type="text"
        placeholder="Search for film..."
        aria-label=".form-control-lg example"
      />
      <button className="btn btn-primary searchbtn" type="submit">
        Add
      </button>
    </form>
  );
}
