import { useState } from 'react';

export default function CopyButton(){
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="url-copy">
            {isClicked && 'Copied!'}
            {!isClicked && 'Copy'}
        </div>
    )
}