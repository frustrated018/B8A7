import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";

const Card = ({ card, handlSelect }) => {
  const { thumbnail, course_name, course_description, price, time } = card;

  return (
    <div>
      <div className=" bg-white rounded-xl">
        <div className=" pt-5">
          {/* Thumbnail */}
          <img
            src={thumbnail}
            alt={`thumbnail for ${course_name}`}
            className=" w-[90%] mx-4 rounded-xl"
          />
        </div>
        {/* Text content */}
        <div className=" flex flex-col text-center">
          {/* Title */}
          <h2 className="text-stone-900 text-lg font-semibold truncate my-4">
            {course_name}
          </h2>
          {/* description */}
          <p className="text-stone-900 text-opacity-60 text-sm font-normal mb-5 mx-4">
            {course_description}
          </p>
          {/* price & time */}
          <div className=" flex flex-row justify-evenly mb-6">
              <div className="flex flex-row gap-3 items-center">
                <FiDollarSign />
                <p className="text-stone-900 text-opacity-60 text-lg font-medium">
                  Price : {price} 
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <GoBook />
                <p className="text-stone-900 text-opacity-60 text-lg font-medium">
                  Credit : {time}hr
                </p>
              </div>
          </div>
          {/* Button */}
          <div className=" mb-4">
            <button
            onClick={()=>handlSelect(card)}
             className="bg-blue-500 rounded-lg border border-blue-500  h-10 w-[90%] text-white text-lg font-semibold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handlSelect : PropTypes.func.isRequired,
};

export default Card;
