import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingActionButton from "../components/FloatingActionButton";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="fixed bottom-10 right-4 z-20 md:bottom-20 md:right-14 lg:right-24">
        <FloatingActionButton />
      </div>
      {/* <Footer /> */}
    </>
  );
}
