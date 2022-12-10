import { Route, Routes } from "react-router-dom";
import {
  Home,
  SingleHotel,
  SearchResults,
  Wishlist,
  Payment,
  OrderSummary
} from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<SearchResults />} />
      <Route path="/wishlists" element={<Wishlist />} />
      <Route path="/confirm-booking/stay/:id" element={<Payment />} />
      <Route path="/order-summary" element={<OrderSummary />} />
    </Routes>
  );
}

export default App;
