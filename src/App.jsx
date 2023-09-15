import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  // Select button related function
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20)

  const handlSelect = (card) => {
    // Initial balance and credit
    let count = card.price;
    let time = card.time;


    const alreadyAdded = cart.find((course) => course.id == card.id);
    if (alreadyAdded) {
      return alert("you can only select onece");
    } else {

      // Balance calculating function

      cart.forEach(element => {
        count += element.price;
      });

      setTotal(count)


      // Credit counting function
      cart.forEach(element => {
          time += element.time
      })

      setTime(time);
      setRemainingCredit(remainingCredit - card.time);


      setCart([...cart, card]);
    }
  };

  return (
    <>
      <Header></Header>
      <div className=" md:flex gap-6 mx-[40px]">
        <Cards handlSelect={handlSelect}></Cards>
        <div>
          <Cart 
          cart={cart}
          total={total}
          time={time}
          remainingCredit = {remainingCredit}
          ></Cart>
          <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        </div>
      </div>
    </>
  );
}

export default App;
