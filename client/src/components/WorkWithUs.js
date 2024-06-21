import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';

function WorkWithUs() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleScheduleAppointment = () => {
        if (selectedDate) {
            const newAppointment = {
                id: uuidv4(),
                date: selectedDate
            };
            setAppointments([...appointments, newAppointment]);
            setSelectedDate(null); // Reset selected date after scheduling
        }
    };

    const handleCancelAppointment = (id) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    };

    return (
        <div className="calendar-container">
            <h1>Appointment Calendar</h1>
            <div className="date-picker-container">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()} // Prevent selecting past dates
                    isClearable
                    placeholderText="Select a date"
                />
                <button onClick={handleScheduleAppointment}>Schedule Appointment</button>
            </div>
            <div className="appointments-list">
                <h2>Appointments</h2>
                <ul>
                    {appointments.map(appointment => (
                        <li key={appointment.id}>
                            <strong>Date:</strong> {appointment.date.toLocaleDateString()}{' '}
                            <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WorkWithUs;
