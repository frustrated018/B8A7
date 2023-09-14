import PropTypes from "prop-types";

const Card = ({ card }) => {

    const {thumbnail, course_name, course_description, price, time} = card;

  return (
    <div>
      <div className="card bg-slate-300 shadow-xl">
        <figure className="px-5 pt-10">
          <img
            src={thumbnail}
            alt={`thumbnail for ${course_name}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{course_name}</h2>
          <p>{course_description}</p>
          <div className=" flex justify-between gap-5">
          <p>{price} tk</p>
          <p>{time} hr</p>
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
