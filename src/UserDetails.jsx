export const UserDetails = ({ name, isOnline, hideOffline }) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    return (
        <div>
            <h2>{name}</h2>
            <p> Status : {isOnline ? 'Online' : 'Offline'}</p>
            <p>{isOnline  ? <button>Send Message</button> : <h3>Check back later</h3>}</p>
        </div>
    )
}