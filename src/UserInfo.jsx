export const UserInnfo = ({name, age, location, email, messages}) => {
    return (
        <>
        <h2>Name {name}</h2>
        <h2>Age {age}</h2>
        <h2>Location {location}</h2>
        <h2>Email {email}</h2>
        <p>{messages}</p>
        </>
    )
}