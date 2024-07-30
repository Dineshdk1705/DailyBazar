import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-50">
      <div className="px-5 md:px-36 py-4 w-screen sticky top-0 bg-gray-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
