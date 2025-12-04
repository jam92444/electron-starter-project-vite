
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/pg1")}>Go to page 1</button>
        <button onClick={() => navigate("")}>Go to Sample Page</button>
      </div>
    </div>
  );
};

export default Home;
