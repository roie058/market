import { useState } from "react";
import Header from "./components/Layout/Header";

import Card from "./components/UI/Card";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Routes, Route } from "react-router-dom";

function App(props) {
  const [cartIsShown, setCardIsShown] = useState(false);

  const shoewCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={shoewCartHandler} />
      <Card>
        <Routes>
          <Route path="/" element={<AvailableMeals />} />

          <Route path="/:department" element={<AvailableMeals />} />
        </Routes>
      </Card>
    </CartProvider>
  );
}

export default App;
