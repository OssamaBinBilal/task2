import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Posts from "./pages/Posts/Posts";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import UnprotectedRoute from "./components/UnprotectedRoutes/UnprotectedRoutes";
import { AuthProvider } from "./hooks/useAuth";
import { PostProvider } from "./hooks/usePosts";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

//REMAINING TASKS

// 1. User should be able to add a post
//create a post and save it to localstorage: "posts"

// 2. User should be able to edit a post
//edit a post from within the local storage

// 3. User should be able to delete a post
//remove a post from the local storage

//custom posts should display
//user should be able to add comments under a post
