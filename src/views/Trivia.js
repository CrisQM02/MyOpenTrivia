import { useLocation } from "react-router-dom";

const Trivia = () => {
  const location = useLocation();
  const { questions } = location.state || {};

  if (!questions) {
    console.log("No questions available");
  } else {
    console.log({ questions });
  }
  return (
    <div className="trivia">
      <h1>Trivia</h1>
    </div>
  );
};

export default Trivia;
