export default function CopyButton(props){
    return (
        <div className={!props.isClicked ? 'url-copy' : 'url-copied'} onClick={() => props.handleClick(props.index)}>
            {props.isClicked && 'Copied!'}
            {!props.isClicked && 'Copy'}
        </div>
    )
}