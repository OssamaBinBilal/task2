import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Posts from "./pages/Posts/Posts";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import UnprotectedRoute from "./components/UnprotectedRoutes/UnprotectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UnprotectedRoute>
                <SignUp />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UnprotectedRoute>
                <SignIn />
              </UnprotectedRoute>
            }
          />
          <Route path="/*" element={<>nogga</>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
