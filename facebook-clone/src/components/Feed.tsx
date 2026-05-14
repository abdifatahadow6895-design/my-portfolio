import Post from "./Post";
import CreatePost from "./CreatePost";

export default function Feed() {
  return (
    <div className="flex-1 bg-red-900 max-w-xl mx-auto p-4">
      <CreatePost />

      <Post name="Ali" content="Hello world!" />
      <Post name="Abdi" content="My first Facebook clone 😄" />
    </div>
  );
}
