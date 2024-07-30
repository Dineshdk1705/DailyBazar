import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <div className="px-5 md:px-36 w-screen sticky top-0 bg-gray-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
