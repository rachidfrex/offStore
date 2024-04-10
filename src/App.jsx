import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import Collections from "./components/collections";
import Products from "./components/products";
function App() {
  return (
    <div className="font-BeVietnam">
      <Nav />
      <Carousel />
      <Collections />
      <Products />
    </div>
  );
}

export default App;
