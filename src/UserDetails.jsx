export const UserDetails = ({ name, isOnline}) => {
    if(isOnline){
        return(
            <div>
                <h2>{name}</h2>
                <span style={{color: "green"}}>Online</span>
                <p>Avalible for chat</p>
            </div>
        )
    }
    return(
        <div>
            <h2>{name}</h2>
            <span style={{color: "red"}}>Offline</span>
            <p>Not Avalible for chat</p>
        </div>
    )
}