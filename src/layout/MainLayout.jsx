import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <main className="container mx-auto p-4 overflow-x-hidden overflow-y-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
