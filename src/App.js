import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>skdona</>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/*" element={<>nogga</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
