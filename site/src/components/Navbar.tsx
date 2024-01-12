import { Link } from "react-router-dom";
import { useState } from "react";
// import App from "../App";
function Navbar() {
  const [homeText, setHomeText] = useState(true);
  const [aboutText, setAboutText] = useState(false);
  const [cvText, setCVText] = useState(false);

  return (
    <div className="flex gap-[41px] justify-end lg:text-2xl lg:mt-[100px] lg:mb-[100px]">
      <Link
        to="/"
        onClick={() => {
          setHomeText(true);
          setAboutText(false);
          setCVText(false);
        }}
      >
        {homeText ? <p className="line-through">home</p> : <p>home</p>}
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setHomeText(false);
          setAboutText(true);
          setCVText(false);
        }}
      >
        {aboutText ? <p className="line-through">about</p> : <p>about</p>}
      </Link>
      <Link
        to="/cv"
        onClick={() => {
          setHomeText(false);
          setAboutText(false);
          setCVText(true);
        }}
      >
        {cvText ? <p className="line-through">cv</p> : <p>cv</p>}
      </Link>
    </div>
  );
}

export default Navbar;
