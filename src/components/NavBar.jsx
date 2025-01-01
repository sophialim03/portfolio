import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation(); // Get the current path
  const isHomePage = location.pathname === "/"; 
  const isContactPage = location.pathname === "/contact"; 

  return (
    <nav className={`${isHomePage || isContactPage ? "transparent-nav" : "white-nav"}`}>
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
