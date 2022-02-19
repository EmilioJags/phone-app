import React, { useState, Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function CalendarComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const minAvail = new Date('01-Jan-1940')
    const years = Array(100).fill().map((v, i) => ({ id: i + 1 }));



    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <div>
            <Datepicker

                selected={startDate}
                dateFormat='dd-MMM-yyyy'
                onChange={(date) => setStartDate(date)}
            />
        </div >
    )
}


export default CalendarComponent

