import { info, features } from "./data";

import About from "./components/About";
import Navbar from "./components/Navbar";
import MoreInfoCard from "./components/MoreInfoCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="px-4 xl:px-28">
        <About />
        <h1 className="text-2xl font-semibold"> More From Us </h1>
        <div className="flex justify-start items-center flex-wrap">
          {info.map((obj, index) => {
            return <MoreInfoCard obj={obj} key={index} />
          })}
        </div>

        <h1 className="text-2xl font-semibold"> Featured List </h1>
        <div className="flex justify-start items-center flex-wrap">
          {features.map((obj, index) => {
            return <FeatureCard obj={obj} key={index} />
          })}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;
