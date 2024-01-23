import { useNavigate } from "react-router-dom";
import "../styles/about.css";
const About = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>About Page</h1>
      <br />
      <button onClick={goToHome}>Go to Home</button>
    </>
  );
};

export default About;
