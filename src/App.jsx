import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [cart, setCart] = useState([]);

  const handlSelect = (card) => {
    setCart([...cart, card]);
  };

  return (
    <>
      <Header></Header>
      <div className=" md:flex gap-6 mx-[40px]">
        <Cards handlSelect={handlSelect}></Cards>
        <div>
          <Cart cart={cart}></Cart>
          <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        </div>
      </div>
    </>
  );
}

export default App;
