import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import Login from "./pages/Login.js";
import Signup from "./pages/SignUp.js";
import Account from "./pages/Account.js";
import ProtectedRoute from './components/protectedRoute.js';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
