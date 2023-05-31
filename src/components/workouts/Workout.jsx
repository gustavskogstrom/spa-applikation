
const Workout = ({workout}) => {
    return (
    <li key={workout.id}>Name - {workout.name}. Muscle - {workout.muscle}. Reps - {workout.reps}</li>
    );
};

export default Workout;