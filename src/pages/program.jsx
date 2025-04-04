import React from "react";
import { Link } from "react-router-dom";
import config from "../config";
import {useState} from "react";

function Program({ days, movieSchedules }) {

	const actualDays = days || [];
	const actualMovieSchedules = movieSchedules || {};

	const defaultDay = actualDays.length > 0 ? actualDays[0].value : "Monday";
	const [selectedDay, setSelectedDay] = useState(defaultDay);

	const handleDayClick = (day) => {
		setSelectedDay(day);
	}

	return(
		<div className="main">
		<div className="box">
		  <h1>Välj dag</h1>
		  <div className="days" id="program">
			{actualDays.map((day) => (
			  <button 
				key={day.value}
				className={`button ${selectedDay === day.value ? "selected-day" : ""}`} 
				onClick={() => handleDayClick(day.value)}
				style={selectedDay === day.value ? {backgroundColor: "var(--button-hover)"} : {}}
			  >
				{day.name}<br/>{day.date}
			  </button>
			))}
		  </div>
  
		  <h1>Program</h1>
		  <div className="daily-program">
			<h3>Tid</h3>
			<h3 className="rubrik">Film</h3>
			<h3 className="rubrik">Platser kvar</h3>
  
			{(actualMovieSchedules[selectedDay] || []).map((movie, index) => (
				<React.Fragment key={index}>
					<p>{movie.time}</p>
					<Link to="/moviesinfo">
					<img 
						src={`${config.assetPath}/images/${movie.image}`} 
						alt={movie.title}
					/>
					</Link>
					<h4>{movie.title}<p>{movie.genre}</p></h4>
					<p>{movie.available} av {movie.total}</p>
					<Link to="#" className="button">Reservera</Link>
				</React.Fragment>
			))}
		  </div>
		</div>
	  </div>
	);
  }
  export default Program;
