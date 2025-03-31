import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Access from './pages/access.jsx';
import Event from './pages/event.jsx';
import FindUs from './pages/findus.jsx';
import Membership from './pages/membership.jsx';
import MovieInfo from './pages/movieinfo.jsx';
import Movies from './pages/movies.jsx';
import Newsletter from './pages/newsletter.jsx';
import Program from './pages/program.jsx';
import Schoolarship from './pages/schoolarship.jsx';
import TicketInfo from './pages/ticketInfo.jsx';

function App() {
	const [theme, setTheme] = React.useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'dark';
	  });
	  
	  const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	  };

	  React.useEffect(() => {
		document.body.className = `${theme}-theme`;
	  }, [theme]);
	  
return (
	<BrowserRouter>
		<div className={`App ${theme}-theme`}>
			<Navbar theme={theme} toggleTheme={toggleTheme} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/membership" element={<Membership />} />
				<Route path="/movieinfo" element={<MovieInfo />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/event" element={<Event />} />
				<Route path="/program" element={<Program />} />
				<Route path="/newsletter" element={<Newsletter />} />
				<Route path="/schoolarship" element={<Schoolarship />} />
				<Route path="/access" element={<Access />} />
				<Route path="/findus" element={<FindUs />} />
				<Route path="/ticketinfo" element={<TicketInfo />} />
			</Routes>

			<Footer />
		</div>
	</BrowserRouter>
);
}
export default App;
