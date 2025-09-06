import { Link } from "react-router";
import useAppContext from "../../hooks/useAppContext";

const Blog = () => {
  const { handleNavigate } = useAppContext();
  return (
    <div>
      <h1 className="text-5xl font-bold py-4 text-red-500 text-center">Blog</h1>
      <ul className="mt-4 text-center">
        <li className="text-2xl font-bold mt-3 hover:text-blue-500">
          <Link onClick={() => handleNavigate("/")}>Home</Link>
        </li>
        <li className="text-2xl font-bold mt-3 hover:text-blue-500">
          <Link onClick={() => handleNavigate("/work")}>Work</Link>
        </li>
        <li className="text-2xl font-bold mt-3 hover:text-blue-500">
          <Link onClick={() => handleNavigate("/about")}>Agency</Link>
        </li>
        <li className="text-2xl font-bold mt-3 hover:text-blue-500">
          <Link onClick={() => handleNavigate("/contact")}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
