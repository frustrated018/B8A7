import PropTypes from "prop-types";

const Card = ({ card }) => {

    const {thumbnail, course_name, course_description, price, time} = card;

  return (
    <div>
      <div className="card bg-slate-300 shadow-xl">
        <figure className="px-4 pt-5">
          <img
            src={thumbnail}
            alt={`thumbnail for ${course_name}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-stone-900 text-lg font-semibold truncate">{course_name}</h2>
          <p className="text-stone-900 text-opacity-60 text-sm font-normal">{course_description}</p>
          <div className=" flex justify-between gap-5">
          <p className="text-stone-900 text-opacity-60 text-base font-medium">Price : {price} tk</p>
          <p className="text-stone-900 text-opacity-60 text-base font-medium">Credit : {time} hr</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Select</button>
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
