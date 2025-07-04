import React, { useEffect, useState } from 'react';
import { useCheckin } from '../contexts/CheckinContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  const [checkins, setcheckin] = useState([]);
  const [ setCheckins] = useState([]);
  // connect to 
  async function fetchCheckins() {
    await axios.get(`${apiUrl}/api/checkins`)
     .then((response) => {
       console.log(response.data);
       setcheckin(response.data);
      })
     .catch((error) => {
        console.log(error);
      });
  }   

 useEffect(() => {
    fetchCheckins();
  }, []);


  async function deleteAllCheckins() {
    if (window.confirm('Are you sure you want to delete all check-ins?')) {
      await axios.delete(`${apiUrl}/api/delete-all-checkins`)
        .then((response) => {
          console.log(response.data);
          setCheckins([]); // Clear the state to reflect the deletion
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    fetchCheckins();
  }, []);


  return (
    <div className="dashboard-container">
      <h1>Check-In Dashboard</h1> 
       <button onClick={deleteAllCheckins}>Clear All Check-Ins</button>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Slot</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {checkins.length > 0 ? ( 
            (checkins).map((checkin) => {
              return <tr key={checkin.rollNo}>
                <td>{checkin.rollNo}</td>
                <td>{checkin.slot}</td>
                <td>{checkin.checkIn}</td>
                <td>{checkin.checkOut || 'Not Checked Out'}</td>
              </tr>})): <tr><td colSpan="4">No entries</td></tr>}
        </tbody>
      </table>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
