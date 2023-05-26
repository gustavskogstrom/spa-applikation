import { useEffect, useState } from 'react'
import axios from 'axios'

import React from 'react';
import Workouts from './components/Workouts/Workouts';

const Info = () => {
    const [workouts, setWorkouts] = useState([]);
    const url = 'http://localhost:5000/api/1/workouts';

    useEffect(() => {
        const loadWorkouts = async () => { 
        const {data} = await axios.get(url);
        console.log(data);
        setWorkouts(data);
        };

        loadWorkouts();
    },[]);

    return <Workouts workouts={workouts}/>
};

export default Info;