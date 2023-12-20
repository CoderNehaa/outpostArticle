import About from "./components/About";
import Navbar from "./components/Navbar";
import MoreInfoCard from "./components/MoreInfoCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-4 xl:px-20">
        <About />
      </div>
      {/* <MoreInfoCard />
      <FeatureCard />
      <Footer /> */}
    </div>
  );
}

export default App;
