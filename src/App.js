
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './components/Auth/Signup';
// import Login from './components/Auth/Login';
// import { signup, login, logout, getUser } from './services/authService';
// import "./App.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const user = getUser();
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleSignup = (credentials) => {
//     try {
//       signup(credentials);
//       setIsAuthenticated(true);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleLogin = (credentials) => {
//     if (login(credentials)) {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={isAuthenticated ? <Navigate to="/profile" /> : <Signup onSignup={handleSignup} />} />
//           <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;






import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import { signup, login, logout, getUser } from './services/authService';
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignup = (credentials) => {
    try {
      signup(credentials);
      setIsAuthenticated(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = (credentials) => {
    if (login(credentials)) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };


  return (
    <>
    <Router basename="/weather-location-manager">
      <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/profile" /> : <Signup onSignup={handleSignup} />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
};

export default App;







