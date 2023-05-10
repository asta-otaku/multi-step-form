import "./App.css";
import UserForm from "./components/UserForm";
import { Routes, Route } from "react-router-dom";
import FormikContainer from "./formikComponents/FormikContainer";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes> */}
      <FormikContainer />
    </div>
  );
}

export default App;
