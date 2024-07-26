import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    // bg-gradient-to-r from-pink-200 via-white to-blue-200
    <div className="bg-gray-100">
      <div className="px-5 md:px-36 py-4 w-screen">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
