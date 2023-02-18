import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portifolio from "./Components/Portifolio/Portifolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Topbar from "./Components/Topbar/Topbar";
import Work from "./Components/Work/Work";
import "./App.scss"



function App() {
  return (
    < div className="app">

      <Topbar />
      <div className="sections">

        <Intro />
        <Portifolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
