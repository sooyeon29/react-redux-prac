import React from "react";
import { useNavigate } from "react-router-dom/dist";

const Home = () => {
  const navigate = useNavigate();

  return <div>This is Page Home</div>;
  <button
    onClick={() => {
      navigate("/works");
    }}
  >
    works로 이동
  </button>;
};

export default Home;
