import '../scss/card.scss';

export default function Card(props){
    return(
        <div className="card" style={props.style}>
            <div  className="card-icon">
                <img className="card-icon-image" src={props.image} alt="" />
            </div>
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    )
}