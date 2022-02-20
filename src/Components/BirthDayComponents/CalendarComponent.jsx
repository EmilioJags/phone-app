import React, { useState, Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Calendar from 'react-big-calendar'


function CalendarComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const minAvail = new Date('01-Jan-1940')
    const years = Array(100).fill().map((v, i) => ({ id: i + 1 }));




    return (
        <div>

        </div >
    )
}


export default CalendarComponent

