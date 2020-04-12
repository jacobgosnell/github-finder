import React, { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";

import './App.css';

function App() {
   const [ users, setUsers ] = useState([]);
   const [ loading, isLoading ] = useState(false);
   const [ alert, settingAlert ] = useState(null);
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

   // search Github Users
   const searchUsers = async (text) => {
      isLoading(true);
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);
      isLoading(false);
   }

   // clear Users from state
   const clearUsers = () => { setUsers([]); isLoading(false); }

   // Set Alert
   const setAlert = (msg, type) => {
      settingAlert({ msg, type })
      setTimeout(() => settingAlert(null), 5000)
   }
   
   return (
      <div className="App">
         <Navbar />
         <div className="container">
            <Alert alert={alert} />
            <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false } setAlert={setAlert} />
            <Users loading={loading} users={users} />
         </div>
      </div>
   );
}

export default App;
