import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
