import { Info } from "lucide-react";

export const Error = ({ message }) => (

        <div className="container flex items-center px-6 py-10 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-red-50 dark:bg-gray-800">
            <Info color="#cd4768" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Product not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The Product you are looking for doesn't exist.
          </p>
        </div>
      </div>
);
