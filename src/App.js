import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <Routes>
          <Route path="/" element={<>skdona</>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/*" element={<>nogga</>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
