import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Praktika1 from "./components/Praktika1";
import Praktika2 from "./components/Praktika2";
import Praktika3 from "./components/Praktika3";
import List from "./components/Praktika4/List";
import Praktika6 from "./components/Praktika6";

import UserProfile from "./components/Praktika2Route/UserProfile";
import Users from "./components/Praktika2Route/UserCardsList";

import ErrorPage from "./components/ErrorPage";



function App() {

  return (
    <Router>
    <nav className="container">
      <Link to="/Praktika1"> Praktika1</Link>
      <Link to="/Praktika2"> Praktika2</Link>
      <Link to="/Praktika3"> Praktika3</Link>
      <Link to="/List"> List</Link>
      <Link to="/Praktika6"> Praktika6</Link>

      <Link to="/UserCardsList"> UserCardsList</Link>
    </nav>
    <Routes>
      <Route path="/Praktika1" element={<Praktika1 />} />
      <Route path="/Praktika2" element={<Praktika2 />} />
      <Route path="/Praktika3" element={<Praktika3 />} />
      <Route path="/List" element={<List />} />
      <Route path="/Praktika6" element={<Praktika6 />} />

      <Route path="/UserCardsList" element={<Users />} />
      <Route path="/:login" element={<UserProfile />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Router>

  );
}

export default App;
