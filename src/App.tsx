import { BoostBanner } from "./components/BoostBanner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import LinksList from "./components/LinksList";
import { ShortenBox } from "./components/ShortenBox";
import { Wrapper } from "./components/Wrapper";
import LinkContextProvider from "./contexts/link-context";
function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <LinkContextProvider>
        <ShortenBox />
        <LinksList />
      </LinkContextProvider>
      <Features />
      <BoostBanner />
      <Footer />
    </Wrapper>
  );
}

export default App;
