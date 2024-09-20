import NavBar from "./NavBar";
import React from "react";
import { Link } from "react-router-dom"; 
function Home() {
  return (
    <div className="home">
      <NavBar />
      <div>
        <h1>Sophia Lim</h1>
      </div>
      <div>
        <p>
          Hi! I'm a student at Brown University, originally from New Zealand,
          majoring in Computer Science and Economics. It’s nice to meet you :)
        </p>
        <Link to="/contact">
          <button className="get-in-touch-btn">Get in touch!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
