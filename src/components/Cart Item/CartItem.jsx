import PropTypes from 'prop-types';

const CartItem = ({item, idx}) => {
    const {course_name} = item;
    return (
        <div>
            <div className="text-stone-900 text-opacity-60 text-base font-normal">{idx+1}. {course_name}</div>

        </div>
    );
};

CartItem.propTypes ={
    item : PropTypes.object,
    idx : PropTypes.number
}

export default CartItem;