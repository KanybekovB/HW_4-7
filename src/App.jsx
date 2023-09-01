import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";
import { NotfoundPage } from "./pages/Notfoundpage";

export default function App() {
  return (
    <>
      <header id="header">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <nav>
          <form className="search" action="search.php">
            <input name="q" placeholder="Search..." type="search" />
          </form>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}
