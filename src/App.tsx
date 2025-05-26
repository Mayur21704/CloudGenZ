import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ProductListPage from "./pages/ProductList";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
