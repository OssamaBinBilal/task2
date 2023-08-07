import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Posts from "./pages/Posts/Posts";
import ProtectedRoute from "./utilityComponents/ProtectedRoutes/ProtectedRoute";
import UnprotectedRoute from "./utilityComponents/UnprotectedRoutes/UnprotectedRoutes";
import { AuthProvider } from "./hooks/useAuth";
import { PostProvider } from "./hooks/usePosts";
import { SnackbarProvider } from "./hooks/useSnackbar";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <AuthProvider>
          <PostProvider>
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
          </PostProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
