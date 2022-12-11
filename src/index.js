import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
  CategoryProvider,
  DateProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  HotelProvider,
  AlertProvider
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <WishlistProvider>
                <HotelProvider>
                  <AlertProvider>
                    <App />
                  </AlertProvider>
                </HotelProvider>
              </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
