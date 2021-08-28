import '../scss/url-shortner.scss';
import CopyButton from './CopyButton';
import { useState, useRef, useEffect } from 'react';

export default function URLShortner(props){
    const initialState = JSON.parse(localStorage.getItem('URLs')) || [];
    
    const input = useRef(null);
    const error = useRef(null);
    const [URLs, setURLs] = useState(initialState);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleClick = index => {
        if (window.isSecureContext)
            navigator.clipboard.writeText(URLs[index].short).then(() => setCopiedIndex(index));
        else{
            let textArea = document.createElement("textarea");
            textArea.value = URLs[index].short;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            new Promise((res, rej) => {
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            }).then(() => setCopiedIndex(index));
        }
    }

    useEffect(() => localStorage.setItem('URLs', JSON.stringify(URLs)), [URLs]);
   
    const APIEndPoint = 'https://api.shrtco.de/v2/shorten?url=';
    return (
        <div className="url-shortner-wrapper">
            <div className="url-shortner">
                <div className="url-shortner__wrapper">
                    <input className="url-shortner__input" type="text" name="url"
                        placeholder="Shorten a link here.." ref={input} />
                    <button disabled={props.progress !== 0} className={`shorten-it ${props.progress}`} onClick={async () => {
                        props.startLoading();
                        input.current.classList.remove('error');
                        error.current.innerHTML = ``;
                        try{
                            let response = await fetch(APIEndPoint + input.current.value, {
                                mode: 'cors',
                                credentials: 'same-origin',
                                method: 'GET',
                            });
                            console.log(response);
                            response = await response.json();
                            console.log(response);
                            if (response.error_code){
                                error.current.innerHTML = `Error`;
                                input.current.classList.add('error');
                            }
                            else{
                                setURLs(oldURLs => [...oldURLs, {
                                    short: response.result.short_link,
                                    long: response.result.original_link,
                                }]);
                            }
                            props.finishLoading();
                        }
                        catch{
                            error.current.innerHTML = `Error`;
                            input.current.classList.add('error');       
                            props.finishLoading();
                        }
                    }}>
                        Shorten It !
                    </button>    
                </div>
                <div className="error-message" ref={error}>
                    
                </div> 
            </div>
            <div className="grey-background">
            
            </div>
            <div className="urls">
                {
                    URLs.map((url, index) => (
                        <div className="url" key={url.short}>
                            <a className="url-long" href={url.long}>
                                {url.long}
                            </a>
                            <a className="url-short" href={url.short}>
                                {url.short}
                            </a>
                            <CopyButton isClicked={index === copiedIndex} index={index} handleClick={handleClick} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}