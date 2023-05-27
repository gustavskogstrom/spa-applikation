import { useEffect, useState } from 'react'
import axios from 'axios'

import Workouts from './Workouts';

const Info = () => {
    const [workouts, setWorkouts] = useState([]);
    const url = 'http://localhost:5000/api/1/workouts';

    useEffect(() => {
        const loadWorkouts = async () => { 
        const { data } = await axios.get(url);

        setWorkouts(data);
        };

        loadWorkouts();
    },[]);

    return <Workouts workouts={workouts}/>
};

export default Info;