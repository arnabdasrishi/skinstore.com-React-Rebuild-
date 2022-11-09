import "./App.css";
import IndividualIntervalsExample from "./Components/BannerSlider";
import CategoryDiscount from "./Components/CategoryDiscount";
import Navbar from "./Components/Navbar";
import ShopByCategory from "./Components/ShopByCategory";
import TrendingOffers from "./Components/TrendingOffers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryDiscount />
      <IndividualIntervalsExample />
      <ShopByCategory />
      <TrendingOffers />
    </div>
  );
}

export default App;
