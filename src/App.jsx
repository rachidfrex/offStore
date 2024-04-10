import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import Collections from "./components/collections";
import Products from "./components/products";
import Footer from "./components/footer";
import Discount from "./components/discount";
function App() {
  return (
    <div className="font-BeVietnam  bg-slate-100">
      <Nav />
      <Carousel />
      <Collections />
      <Products />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
