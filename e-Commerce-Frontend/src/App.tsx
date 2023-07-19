import { useEffect, useState } from "react";
import "./App.css";
import ProductListing from "./ui/page/ProductListing";
import ProductDetails from "./ui/page/ProductDetails";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./ui/page/404Page";
import LoginPage from "./ui/page/LoginPage";
import { firebaseAuthServiceOnAuthStateChanged } from "./service/AuthService";
import LoadingSpinner from "./ui/component/LoadingSpinner";

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
              <Route path="/login/" element={<LoginPage />} />
              <Route path="/404" element={<PageNotFound />} />
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
