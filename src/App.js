import "./App.css";
import IndividualIntervalsExample from "./Components/BannerSlider";
import CategoryDiscount from "./Components/CategoryDiscount";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import OverTheBlog from "./Components/OverTheBlog";
import ShopByCategory from "./Components/ShopByCategory";
import TrendingOffers from "./Components/TrendingOffers";
import WhatPeopleAreBuying from "./Components/WhatPeopleAreBuying";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryDiscount />
      <IndividualIntervalsExample />
      <ShopByCategory />
      <TrendingOffers />
      <WhatPeopleAreBuying />
      <OverTheBlog />
      <Footer />
    </div>
  );
}

export default App;
