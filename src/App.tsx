import Navbar from "./components/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserPosts from "./pages/UserPosts";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id/posts" element={<UserPosts />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
