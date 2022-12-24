import { useState, useEffect } from "react";
import "./app.css";
import MovieList from "../MovieList/MovieList.js";
import Filtring from "../Filtring/Filtring.js";

const info = [
  {
    title: "Chernobyl",
    img: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/02/11/14/15/4218723.jpg",
    description:
      "The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.",
    posterURL: "www.chernobyl.com",
    rating: 9.4,
  },
  {
    title: "Cosmos",
    img: "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "MR. ROBOT",
    img: "https://www.justwatch.com/images/poster/288031921/s332/saison-3",
    description:
      "The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.",
    posterURL: "www.mrrobot.com",
    rating: 8.5,
  },
  {
    title: "Planet Earth",
    img: "https://www.ecranlarge.com/uploads/image/001/155/mr-robot-affiche-mr-robot-1155013.jpg",
    description:
      "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
    posterURL: "www.planetearth.com",
    rating: 9.4,
  },
  {
    title: "Prison Break",
    img: "https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },
  {
    title: "Roman Empire",
    img: "https://lacritiquedupangolin.files.wordpress.com/2020/06/91316349_105443104446687_2325509376699269120_n.jpg",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "www.romanempire.com",
    rating: 6.9,
  },
  {
    title: "The Expanse",
    img: "https://fr.web.img6.acsta.net/pictures/19/11/19/12/49/5247478.jpg",
    description:
      "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.",
    posterURL: "www.theexpanse.com",
    rating: 8.5,
  },
  {
    title: "The Walking Dead",
    img: "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR83,0,630,1200_AL_.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "Voltron",
    img: "https://flxt.tmsimg.com/assets/p12753088_i_v8_af.jpg",
    description:
      "Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.",
    posterURL: "www.voltron.com",
    rating: 8.1,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    console.log(rate + "  " + key);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Filtring filter={filter} />
      <MovieList list={filtredList} />
    </div>
  );
}

export default App;
