import { BoostBanner } from "./components/BoostBanner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { ShortenBox } from "./components/ShortenBox";
import { Wrapper } from "./components/Wrapper";
function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <ShortenBox />
      <Features />
      <BoostBanner/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
