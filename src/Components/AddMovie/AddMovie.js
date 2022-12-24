import React from "react";
import "./addmovie.css";
export default function AddMovie() {
  const { show, setShow } = useState(false);

  return (
    <div>
      <button onClick={(=>setShow(true))}>Add New Movie</button>
      <div className="add-mov">
        <div className="movie-content"></div>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="img" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="posterURL" />
        <input type="text" placeholder="posterURL" />
      </div>
    </div>
  );
}
