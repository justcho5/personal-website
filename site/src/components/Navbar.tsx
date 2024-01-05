import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className="flex gap-[41px] justify-end lg:text-2xl">
        <Link to="/">home</Link>
        <Link to="/info">info</Link>
        <Link to="/cv">cv</Link>
      </div>

      <Routes>
        <Route path="/info" />
        <Route path="/cv" />
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default Navbar;
