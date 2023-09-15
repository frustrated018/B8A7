import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Select button related function
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  // Toast setup

  const handlSelect = (card) => {
    // Initial balance and credit
    let count = card.price;
    let time = card.time;

    const alreadyAdded = cart.find((course) => course.id == card.id);
    if (alreadyAdded) {
      toast.error("Already Selected", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      // Balance calculating function

      cart.forEach((element) => {
        count += element.price;
      });

      // Credit counting function
      cart.forEach((element) => {
        time += element.time;
      });

      if (time > 20) {
        toast.info("You can not have more than 20 hrs of Credit at one time", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      setTime(time);
      setRemainingCredit(remainingCredit - card.time);
      setTotal(count);

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
            remainingCredit={remainingCredit}
          ></Cart>
          <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        </div>
      </div>
      {/* Toast container related style */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </>
  );
}

export default App;
