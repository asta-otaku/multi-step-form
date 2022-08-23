import "./App.css";
import UserForm from "./components/UserForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
