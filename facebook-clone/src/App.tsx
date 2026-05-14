import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Feed />
        <CreatePost />
        <Post />
      </div>
    </div>
  );
}

export default App;
