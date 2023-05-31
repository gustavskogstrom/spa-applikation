import { Fragment } from 'react';

import Workout from './Workout';



const Workouts = ({ workouts, onAddWorkout }) => {
    return (
        <>
        <form onSubmit={onAddWorkout}>
        <input type="text" placeholder="Name" class='input-field' name='Workoutname'/>
        <input type="text" placeholder="Muscle" class='input-field' name='Workoutmuscle'/>
        <input type="text" placeholder="Reps" class='input-field' name='Workoutreps'/>
        <button className='snygg-knapp'>Lägg till workout</button>
            <ul>
                {workouts.map((workout) => (
                    <Fragment key={workout.id}>
                        <Workout workout={workout} />
                    </Fragment>
                ))}
            </ul>
        </form>
        </>
    );
};
export default Workouts; 