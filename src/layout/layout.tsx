
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-transparent backdrop-blur-md border sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
     <Footer/>
    </div>
  );
}

export default Layout;
