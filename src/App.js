import React, { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
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
         const res = await axios.get('https://api.github.com/users');
         setUsers(res.data);
      }
      fetchData();
      isLoading(false);
   }, [])

   return (
     	<div className="App">
         <Navbar />
         <div className="container">
            <Users loading={loading} users={users} />
         </div>
		</div>
	);
}

export default App;
