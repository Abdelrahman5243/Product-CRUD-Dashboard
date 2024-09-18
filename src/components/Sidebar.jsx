import { NavLink } from "react-router-dom";
import { Home, Plus, BarChart, Users, FileText } from "lucide-react"; // Import Lucid icons

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="w-16 sm:w-64 min-w-16 px-3 py-6 overflow-hidden bg-white dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <ul className="space-y-2 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg dark:text-white group ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <Home className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="opacity-0 sm:opacity-100 flex-1 ms-3 whitespace-nowrap">
              Products
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg dark:text-white group ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <Plus className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="opacity-0 sm:opacity-100 flex-1 ms-3 whitespace-nowrap">
              Add Product
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg dark:text-white group ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <BarChart className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="opacity-0 sm:opacity-100 flex-1 ms-3 whitespace-nowrap">
              Sales
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg dark:text-white group ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <Users className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="opacity-0 sm:opacity-100 flex-1 ms-3 whitespace-nowrap">
              Customers
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg dark:text-white group ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <FileText className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="opacity-0 sm:opacity-100 flex-1 ms-3 whitespace-nowrap">
              Reports
            </span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
