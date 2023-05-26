import { Fragment } from 'react';

import Workout from './workouts/Workout';

const Workouts = ({ workouts }) => {
    return (
        <ul>
            {workouts.map((workout) => (
                <Fragment key={workout.id}>
                    <Workout workout={workout} />
                </Fragment>
            ))}
        </ul>
    );
};
export default Workouts;