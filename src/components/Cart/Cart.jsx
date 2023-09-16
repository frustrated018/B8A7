import PropTypes from "prop-types";
import CartItem from "../Cart Item/CartItem";

const Cart = ({ cart, total, time, remainingCredit }) => {
  return (
    <>
      <div className="w-[312px] mx-auto mb-10  bg-white rounded-xl border border-gray-700 ">
        <div className="text-blue-500 text-center text-xl mt-6 mb-4 font-bold">
          Credit Hour Remaining {remainingCredit} hr
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto my-4"></div>
        <h2 className="text-stone-900 text-xl font-bold ml-6">Course Name</h2>
        <div className="ml-6">
          {cart.map((item, idx) => (
            <CartItem key={idx} item={item} idx={idx}></CartItem>
          ))}
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto mt-6 mb-4"></div>
        <div className="text-stone-900 text-opacity-80 text-base font-semibold ml-6">
          Total credit hour: {time}
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto my-4"></div>
        <div className=" text-stone-900 text-opacity-80 text-base font-bold ml-6 mb-6">
          Total Price: {total} USD
        </div>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  remainingCredit: PropTypes.number,
  time: PropTypes.number,
};
export default Cart;
