import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function ViewBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8282/getBooklist');
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Bookings</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie</th>
            <th>User</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Quota</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bid}>
              <td>{booking.bid}</td>
              <td>{booking.movie.name}</td>
              <td>{booking.user.name}</td>
              <td>{booking.date}</td>
              <td>{booking.quantity}</td>
              <td>{booking.quota}</td>
              <td>{booking.ammount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewBooking;
