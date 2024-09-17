import { useState } from "react";
import img1 from "./images/home-image.png";
import IncrementDecrementBtn from "./IncrementDecrementBtn";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Books" },
  { id: 11, name: "Films" },
  { id: 15, name: "Videogames" },
  { id: 16, name: "Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 27, name: "Animals" },
  { id: 29, name: "Comics" },
  { id: 31, name: "Anime & Manga" },
  { id: 32, name: "Cartoons & Animation" },
];

const Home = () => {
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState(null);
  const [difficult, setDifficult] = useState("any");
  const [type, setType] = useState("any");

  const increaseNumber = () => {
    if (number < 15) {
      setNumber(number + 1);
    }
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <h1>Create your Trivia</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="myParameters">
          <div className="numberQuestion">
            <label>Number of Questions</label>
            <IncrementDecrementBtn
              count={number}
              increase={increaseNumber}
              decrease={decreaseNumber}
            />
          </div>

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label>Difficult</label>
          <select
            value={difficult}
            onChange={(e) => setDifficult(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="any">Any</option>
            <option value="multiple">Multiple</option>
            <option value="boolean">Boolean</option>
          </select>
        </div>
        <div className="rightSection">
          <img
            src={img1}
            alt="home-image"
            className="homeImage"
            style={{ width: "480px", height: "auto" }}
          />
          <button>Get Trivia</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
