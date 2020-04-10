import React from 'react';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import './App.css';

function App() {
  const numbers = [1,2,3,4];
  return (
		<div className="App">
      <Navbar title={numbers} />
      <UserItem />
		</div>
	);
}

export default App;
