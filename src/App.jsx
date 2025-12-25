import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { PrivateRoute, PublicRoute } from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/post/CreatePost";
import Profile from "./pages/profile/Profile";
import UserProfile from "./pages/profile/UserProfile";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="create" element={<CreatePost />} />
      </Route>

      <Route
        path="/myprofile/:username"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/profile/:username" element={<UserProfile />} />

      {/* Future routes */}
      {/* <Route path="/profile/:username" element={<Profile />} /> */}
    </Routes>
  );
}

export default App;
