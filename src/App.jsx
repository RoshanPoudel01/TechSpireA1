import { Route, Routes } from "react-router-dom";
import BlogForm from "./pages/Blog/Form";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/add" element={<BlogForm />} />
    </Routes>
  );
}

export default App;
