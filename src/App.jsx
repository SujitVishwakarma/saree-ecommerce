import { Outlet } from "react-router-dom";
import TopHeader from "./components/navbar/TopHeader";
import Footer from "./components/navbar/Footer";

const App = () => {
  return (
    <div className="flex flex-col relative w-full h-full">
      <TopHeader/>
      <Outlet/>
      <div className="flex absolute bottom-0 left-0 py-4">
        <Footer/>
      </div>
    </div>
  )
};

export default App;
