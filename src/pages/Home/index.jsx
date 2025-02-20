import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Post Title 1",
      description: "A short description of the blog post goes here.",
    },
    {
      id: 2,
      title: "Post Title 2",
      description: "Another short description for a different blog post.",
    },
    {
      id: 3,
      title: "Post Title 3",
      description: "More content about exciting topics.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-10 px-6 min-h-[80dvh]">
        {/* Hero Section */}
        <section className="bg-blue-50 p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Welcome to My Blog!
          </h2>
          <p className="text-lg text-gray-700">
            Sharing thoughts, tutorials, and stories about web development,
            technology, and life.
          </p>
        </section>

        {/* Blog Posts */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog.title}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">
                    {blog.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <a
                    onClick={() => navigate("/blog/id=1")}
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Read more
                  </a>
                </div>
              );
            })}
            {/* Blog Post 1 */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Post Title 1
              </h4>
              <p className="text-gray-700 mb-4">
                A short description of the blog post goes here.
              </p>
              <a
                onClick={() => navigate("/blog/id=1")}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Read more
              </a>
            </div> */}

            {/* Blog Post 2 */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Post Title 2
              </h4>
              <p className="text-gray-700 mb-4">
                Another short description for a different blog post.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more
              </a>
            </div> */}

            {/* Blog Post 3 */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Post Title 3
              </h4>
              <p className="text-gray-700 mb-4">
                More content about exciting topics.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more
              </a>
            </div> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
