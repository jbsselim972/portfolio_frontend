import { Header, Footer, Skills, Quote, About, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "@/styles/App.css";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </div>
  );
};

export default App;
