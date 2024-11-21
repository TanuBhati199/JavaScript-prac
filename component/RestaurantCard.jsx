import {IMG_CDN} from "./contant.jsx";

 
const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines, lastMileTravelString, cloudinaryImageId } = restaurant.data;
  
    return (
      <div className="card">
        <img
          src={`${IMG_CDN+cloudinaryImageId}`}
          alt="food-item"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    );
  };
  export default RestaurantCard;