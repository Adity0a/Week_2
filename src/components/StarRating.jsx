import { assets } from "../assets/assets";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? assets.starIconFilled : assets.starIconOutlined}
          alt="star"
          className="h-3.5"
        />
      ))}
    </div>
  );
};

export default StarRating;
