import "./app.scss";
import { About } from "./components/About/About";
import { Hero } from "./components/Home/Hero";
import { Navbar } from "./components/Navbar/navbar";
import { Project } from "./components/Projects/Project";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
          <Navbar />
        <section>
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Project />
        </section>
        <section id="Contact">Contact</section>
      </div>
    </div>
  );
};

export default App;
