export const UserDetails = ({ name, isOnline, hideOffline }) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    return (
        <div>
            <h2>{name}</h2>
            <p> Status : {isOnline ? 'Online' : 'Offline'}</p>
            <p>{isOnline  ? <button>Send Message</button> : <button>You are offline</button>}</p>
        </div>
    )
}