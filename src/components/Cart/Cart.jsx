import PropTypes from "prop-types";
import CartItem from "../Cart Item/CartItem";

const Cart = ({ cart, total, time, remainingCredit }) => {
  return (
    <>
      <div className="w-[312px] min-h-[355px] bg-white rounded-xl border border-red-500">
      <div className="text-blue-500 text-center text-lg font-bold">Credit Hour Remaining {remainingCredit} hr</div>
      <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        <h2 className="text-stone-900 text-xl font-bold p-3">Course Name</h2>
        <div>
          {cart.map((item, idx) => (
            <CartItem key={idx} item={item} idx={idx}></CartItem>
          ))}
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        <div className="text-stone-900 text-opacity-80 text-base font-medium">
          Total Price: {total}
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
        <div>Total credit hour: {time}</div>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  remainingCredit : PropTypes.number,
  time: PropTypes.number,
};
export default Cart;
