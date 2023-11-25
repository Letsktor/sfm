import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import animal from "./Animal";


function MyDatePicker({ selectedDate, setSelectedDate ,animalID}) {

    const [unavailableDates, setUnavailableDates] = useState([]);
    useEffect( () => {
        loadDates()
    }, []);
    const loadDates = async () => {
        const result = await axios.get('http://127.0.0.1:8080/date');
        const filteredDates=result.data.filter(date=>date.animal_id===animalID);
        const dateObjects = filteredDates.flatMap(date => {
            const dateObj = new Date(date.date);
            const nextDay = new Date(dateObj);
            nextDay.setDate(dateObj.getDate() + 1);
            return [dateObj, nextDay];
        });
        setUnavailableDates(dateObjects);
    }
    const isUnavailable = (date) => {
        return unavailableDates.some(d => d.getTime() === date.getTime());
    };
    const getDayClassName = (date) => {
        return isUnavailable(date) ? 'unavailable-date' : '';
    };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            excludeDates={unavailableDates}
            minDate={today}
            dayClassName={getDayClassName}
                    inline
        />
    );
}

export default MyDatePicker;
