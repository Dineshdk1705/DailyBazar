import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <div className="px-5 md:px-36 w-screen fixed top-0 bg-gray-50 z-50">
        <Header />
      </div>
      <div className="mt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
