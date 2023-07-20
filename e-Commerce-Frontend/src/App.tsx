import { useEffect, useState } from "react";
import "./App.css";
import ProductListing from "./ui/page/ProductListing";
import ProductDetails from "./ui/page/ProductDetails";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./ui/page/404Page";
import LoginPage from "./ui/page/LoginPage";
import { firebaseAuthServiceOnAuthStateChanged } from "./service/AuthService";
import LoadingSpinner from "./ui/component/LoadingSpinner";
import ShoppingCart from "./ui/page/ShoppingCart";
import TransactionPage from "./ui/page/TranscationPage";
import ThankYouPage from "./ui/page/ThankyouPage";
import Order from './ui/page/SpecialPrice/Order';
import OrderHistory from './ui/page/SpecialPrice/OrderHistory';
import SpecialPricePage from './ui/page/SpecialPrice/SpecialsComponent';

<style media="" data-href="https://static.oliveyoung.co.kr/pc-static-root/css/style.css?dumm=20230706003"></style>

function App() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    firebaseAuthServiceOnAuthStateChanged(() => {
      setIsInitialized(true);
    });
  });

  return (
    <>
      {isInitialized ? (
        <div className="App">
          <HashRouter>
            <Routes>
              <Route path="/" element={<ProductListing />} />
              <Route path="/product-detail" element={<ProductDetails />} />
              <Route path="/shoppingcart/" element={<ShoppingCart />} />
              <Route path="/login/" element={<LoginPage />} />
              <Route
                path="/checkout/:transactionId"
                element={<TransactionPage />}
              />
              <Route path="/thankyou" element={<ThankYouPage />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="/special" element={<SpecialPricePage />} />
              <Route path="/order/:productNo" element={<Order />} />
              <Route path="/order/history" element={<OrderHistory />} />
            </Routes>
          </HashRouter>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default App;
