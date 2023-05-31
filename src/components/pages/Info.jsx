import { useEffect, useState } from 'react'
import axios from 'axios'

import Workouts from '../workouts/Workouts';

const Info = () => {
    const [workouts, setWorkouts] = useState([]);
    const url = 'http://localhost:5000/api/1/workouts';

    useEffect(() => {
        const loadWorkouts = async () => {
            const { data } = await axios.get(url);
            console.log(data);
            setWorkouts(data);
        };

        loadWorkouts();
    }, []);

    const onAddWorkoutHandler = async (e) => {
        e.preventDefault();
        const name = e.target.Workoutname.value;
        const muscle = e.target.Workoutmuscle.value;
        const reps = e.target.Workoutreps.value;
        let WorkoutList = [];
        const newWorkout = { name, muscle, reps };
        const {data} = await axios.post(url, newWorkout);
        console.log(data);
        WorkoutList = [...workouts, data];
        setWorkouts(WorkoutList);
    }

    return (
        <main >
            <article className='text-list'>
                <Workouts workouts={workouts} onAddWorkout={onAddWorkoutHandler}/>
            </article>
        </main>
    );
};

export default Info;