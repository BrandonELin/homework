export default function Ship ({ starship }) {

    return (
        <div className="dropdown">
            <button className = "page dropbtn">{starship.name}</button>
            <div className="dropdown-content">
                <div className="inner-text">
                    Model: {starship.model}<br/>
                    Manufacturer: {starship.manufacturer}<br/>
                    {starship.starship_class}
                </div>
            </div>
        </div>
    )
}