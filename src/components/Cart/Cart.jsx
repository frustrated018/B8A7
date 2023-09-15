import PropTypes from "prop-types";
import CartItem from "../Cart Item/CartItem";

const Cart = ({ cart }) => {
  return (
    <>
      <div className="w-[312px] h-[355px] bg-white rounded-xl border border-red-500">
        <h2 className="text-stone-900 text-xl font-bold p-3">Course Name</h2>
        <div>
          {cart.map((item, idx) => (
            <CartItem key={idx} item={item} idx={idx}></CartItem>
          ))}
        </div>
        <div className="w-[85%] h-[0px] border border-stone-900 border-opacity-20 mx-auto"></div>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};
export default Cart;
