
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentList.css'; 

const apiUrl = process.env.REACT_APP_API_URL;
const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/students/all`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (rollNo) => {
    try {
      await axios.delete(`${apiUrl}/api/students/${rollNo}`);
     
      setStudents(students.filter(student => student.rollNo !== rollNo));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
const handleDeleteAll = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all students?");
    if (confirmDelete) {
      try {
        await axios.delete(`${apiUrl}/api/students`);
        setStudents([]); // Clear the students array after deletion
      } catch (error) {
        console.error('Error deleting all students:', error);
      }
    }
  };
  return (
    <div className="student-list-container">
      <h1>Student List</h1>
       <button onClick={handleDeleteAll}>Delete All Students</button>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Hostel</th>
            <th>Year</th>
            <th>Slot</th>
            <th>Count</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.hostel}</td>
              <td>{student.year}</td>
              <td>{student.slot}</td>
              <td>{student.count}</td>
              <td>
                <button onClick={() => handleDelete(student.rollNo)}>Delete</button> 
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="7">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
