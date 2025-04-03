import React from "react";
import { Link } from "react-router-dom";
import config from "../config";
import {useState} from "react";

function Program() {

	const [selectedDay, setSelectedDay] = useState("Monday");

	const days = [
		{ date: "13/12", name: "Måndag", value: "Monday" },
		{ date: "14/12", name: "Tisdag", value: "Tuesday" },
		{ date: "15/12", name: "Onsdag", value: "Wednesday" },
		{ date: "16/12", name: "Torsdag", value: "Thursday" },
		{ date: "17/12", name: "Fredag", value: "Friday" },
	]

	const movieSchedules = {
		Monday: [
		  { time: "14:45", title: "Konklaven", genre: "Drama", image: "conclave.jpg", available: 24, total: 35 },
		  { time: "15:30", title: "Maria", genre: "Drama", image: "maria.jpeg", available: 30, total: 35 },
		  { time: "16:15", title: "Babygirl", genre: "Thriller", image: "babygirl.jpeg", available: 27, total: 35 },
		  { time: "17:00", title: "A Complete Unknown", genre: "Drama", image: "complete.jpg", available: 43, total: 100 },
		  { time: "17:45", title: "A Real Pain", genre: "Drama, Komedi", image: "arealpain.jpeg", available: 57, total: 100 },
		  { time: "18:45", title: "The Brutalist", genre: "Drama", image: "brutalist.jpg", available: 19, total: 35 }
		],
		Tuesday: [
		  { time: "14:00", title: "Maria", genre: "Drama", image: "maria.jpeg", available: 25, total: 35 },
		  { time: "16:00", title: "Konklaven", genre: "Drama", image: "conclave.jpg", available: 18, total: 35 },
		  { time: "18:30", title: "A Real Pain", genre: "Drama, Komedi", image: "arealpain.jpeg", available: 62, total: 100 }
		],
		Wednesday: [
		  { time: "15:00", title: "Babygirl", genre: "Thriller", image: "babygirl.jpeg", available: 21, total: 35 },
		  { time: "17:30", title: "The Brutalist", genre: "Drama", image: "brutalist.jpg", available: 27, total: 35 },
		  { time: "19:00", title: "A Complete Unknown", genre: "Drama", image: "complete.jpg", available: 55, total: 100 }
		],
		Thursday: [
		  { time: "14:30", title: "Konklaven", genre: "Drama", image: "conclave.jpg", available: 29, total: 35 },
		  { time: "16:45", title: "Maria", genre: "Drama", image: "maria.jpeg", available: 22, total: 35 },
		  { time: "19:15", title: "A Real Pain", genre: "Drama, Komedi", image: "arealpain.jpeg", available: 48, total: 100 }
		],
		Friday: [
		  { time: "15:45", title: "Babygirl", genre: "Thriller", image: "babygirl.jpeg", available: 15, total: 35 },
		  { time: "17:15", title: "A Complete Unknown", genre: "Drama", image: "complete.jpg", available: 38, total: 100 },
		  { time: "19:30", title: "The Brutalist", genre: "Drama", image: "brutalist.jpg", available: 12, total: 35 }
		]
	  };

	const handleDayClick = (day) => {
		setSelectedDay(day);
	}

	return(
		<div className="main">
		<div className="box">
		  <h1>Välj dag</h1>
		  <div className="days" id="program">
			{days.map((day) => (
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
  
			{movieSchedules[selectedDay].map((movie, index) => (
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
