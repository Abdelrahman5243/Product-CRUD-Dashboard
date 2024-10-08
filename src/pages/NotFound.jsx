import { Link } from "react-router-dom";
import { MoveRightIcon } from "lucide-react";
import Error from "../components/common/Error";

const NotFound = () => {
  return (
    <section className="bg-mainBg h-screen flex flex-col items-center justify-center">
      <Error title="Page Not Found" message="The page you're looking for doesn't exist." />
      <Link
        to="/"
        className="mt-6 px-6 flex gap-3 items-center py-3 bg-zinc-900 text-white rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-accentColor focus:ring-opacity-50"
      >
        <span className="-mt-1">        Return Home
        </span>
        <MoveRightIcon/>
      </Link>
    </section>
  );
};

export default NotFound;
