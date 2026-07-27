export const Welcome = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    console.log(props.location);
    return (
        <>
        <h2>Name {props.name}</h2>
        <h2>Age {props.age}</h2>
        <h2>Location {props.location}</h2>
        </>
    )
}