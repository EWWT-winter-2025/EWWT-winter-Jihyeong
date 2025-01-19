import {Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup" element= {<SignUpPage />} />
      <Route path="/login" element= {<LoginPage />} />
      <Route path="/" element= {<HomePage />} />
    </Routes>
    </>
  )
}

export default App
