import React, { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

import './App.css';

function App() {
   const [ users, setUsers ] = useState([]);
   const [ loading, isLoading ] = useState(false);
   useEffect(() => {
      // promises syntax
      //  axios.get('https://api.github.com/users').then(res => console.log(res.data))
      // async await syntax
      async function fetchData() {
         isLoading(true);
         const res = await axios.get(
            `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
         );
         setUsers(res.data);
      }
      fetchData();
      isLoading(false);
      console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
   }, [])

   return (
     	<div className="App">
         <Navbar />
         <div className="container">
            <Search />
            <Users loading={loading} users={users} />
         </div>
		</div>
	);
}

export default App;
