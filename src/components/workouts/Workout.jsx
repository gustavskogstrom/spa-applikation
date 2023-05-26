const Workout = ({workout}) => {
    return <li key={workout.id}>{workout.name}</li>
};

export default Workout;