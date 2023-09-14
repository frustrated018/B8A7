import PropTypes from "prop-types";

const Card = ({ card }) => {

    const {thumbnail, course_name, course_description, price, time} = card;

  return (
    <div>
      <div className=" bg-slate-300 shadow-xl rounded-xl">
        <figure className="px-4 py-5">
            {/* Thumbnail */}
          <img
            src={thumbnail}
            alt={`thumbnail for ${course_name}`}
            className="rounded-xl"
          />
        </figure>
        {/* Text content */}
        <div className=" flex flex-col text-center">
            {/* Title */}
          <h2 className="text-stone-900 text-lg font-semibold truncate mb-4">{course_name}</h2>
          {/* description */}
          <p className="text-stone-900 text-opacity-60 text-sm font-normal mb-5 mx-4">{course_description}</p>
          {/* price & time */}
          <div className=" flex justify-around gap-5 mb-6">
          <p className="text-stone-900 text-opacity-60 text-base font-medium">Price : {price} tk</p>
          <p className="text-stone-900 text-opacity-60 text-base font-medium">Credit : {time} hr</p>
          </div>
          {/* Button */}
          <div className=" mb-4">
            <button className="bg-blue-500 rounded-lg border border-blue-500  h-10 w-[90%] text-white text-lg font-semibold">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
