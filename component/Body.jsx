import restaurantList from "./contant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const resData = restaurantList; // Directly use the local array
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData); // Correctly set filtered data
      if (filteredData.length === 0) {
        setErrMessage("No matching restaurants found");
      } else {
        setErrMessage("");
      }
    } else {
      setFilteredRestaurants(restaurants); // Reset to all restaurants
    }
  };

  if (!allrestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allrestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <p>{errMessage}</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} restaurant={restaurant} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
