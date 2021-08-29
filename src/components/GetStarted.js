export default function GetStarted(props){
    return (
        <div className={`get-started${props.className ? ' ' + props.className : ''}`}> 
            Get Started
        </div>
    );
}