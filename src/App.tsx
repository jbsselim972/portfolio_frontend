import { Header, Footer, Skills, Quote, About, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "@/styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Quote />
      <About />
      <Skills />
      <Work />
      <Footer />
      <div className="copyright">
        <p className="p-text">@2023 JBSSELIM</p>
      </div>
    </div>
  );
};

export default App;
