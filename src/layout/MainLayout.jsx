import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <main className="container mx-auto p-12 overflow-x-hidden overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
