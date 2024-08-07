import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/common";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/Blogs/BlogDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
