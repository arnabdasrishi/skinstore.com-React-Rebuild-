import "./App.css";
import BelowFooter from "./Components/BelowFooter";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CategoryDiscount from "./Components/CategoryDiscount";
import AllRoutes from "./Routes/AllRoutes";

function App() {


  return (
    <div className="App">
      <Navbar />
      <CategoryDiscount />
      {/* Variable Components starts here */}
      <AllRoutes />
      {/* Variable Components ends here  */}
      <Footer />
      <BelowFooter />
    </div>
  );
}

export default App;
