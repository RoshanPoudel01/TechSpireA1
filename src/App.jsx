import { Route, Routes } from "react-router-dom";
import AddBlog from "./pages/Blog/AddBlog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/add" element={<AddBlog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
