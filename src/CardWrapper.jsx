export const CardWrapper = ({title}) => {
    return(
        <div className="card-wrapper">
            <h1>{title}</h1>
            <p>CardWrapper is a component that wraps around other components and provides a title for the card.</p>
            <div className="card-content">
                <h2>Card Content</h2>
            </div>
        </div>
    )
}