import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductView from "./pages/ProductView";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import { ProductProvider } from "./contexts/ProductContext";
import PrivacyPolicy from "./pages/privacyPolicy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ProductProvider>
      <ScrollToTop />
      <div>
        <Header />
        <main className="pt-12 pb-12">
          <Routes>
            <Route path="/" element={<ProductView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route
              path="*"
              element={
                <div className="text-center text-gray-600 py-20 text-xl">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default App;
