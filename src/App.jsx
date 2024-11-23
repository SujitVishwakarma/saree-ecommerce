import { Outlet } from "react-router-dom";
import TopHeader from "./components/navbar/TopHeader";
import Footer from "./components/navbar/Footer";

const App = () => {
  return (
    <div className="flex flex-col relative w-full h-full">
      <TopHeader/>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
