import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import Collections from "./components/collections";
import Products from "./components/products";
import Footer from "./components/footer";
function App() {
  return (
    <div className="font-BeVietnam">
      <Nav />
      <Carousel />
      <Collections />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
