import "./App.css";
import UserForm from "./components/UserForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
    </Routes>
  );
}

export default App;
