import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ShowUsers() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8282/getUsers'); // Replace '/api/users' with your actual API endpoint to retrieve the users
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h1>User Table</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  