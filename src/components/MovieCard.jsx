import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../context/AuthContext";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContex);

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div
      className="movie"
      id="container"
      onClick={() => navigate("/details/" + id)}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div
        className={
          currentUser
            ? "flex align-middle justify-between text-white py-2 px-2"
            : "d-flex align-middle justify-center text-white p-3"
        }
      >
        <h5 className="text-center">{title}</h5>

        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2 className="text-center">Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
