import '../scss/url-shortner.scss';
import CopyButton from './CopyButton';
import { useState, useRef, useEffect } from 'react';

export default function URLShortner(){
    const initialState = JSON.parse(localStorage.getItem('URLs')) || [];
    const input = useRef(null);
    const error = useRef(null);
    const [URLs, setURLs] = useState(initialState);
    
    useEffect(() => localStorage.setItem('URLs', JSON.stringify(URLs)), [URLs]);
    const APIEndPoint = 'https://api.shrtco.de/v2/shorten?url=';
    return (
        <div className="url-shortner-wrapper">
            <div className="url-shortner">
                <div className="url-shortner__wrapper">
                    <input className="url-shortner__input" type="text" name="url"
                        placeholder="Shorten a link here.." ref={input} />
                    <div className="shorten-it" onClick={async () => {
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
                            input.current.classList.remove('error');
                            error.current.innerHTML = ``;
                        }
                    }}>
                        Shorten It !
                    </div>    
                </div>
                <div className="error-message" ref={error}>
                    
                </div> 
            </div>
            <div className="grey-background">
            
            </div>
            <div className="urls">
                {
                    URLs.map(url => (
                        <div className="url" key={url.short}>
                            <div className="url-long">
                                {url.long}
                            </div>
                            <div className="url-short">
                                {url.short}
                            </div>
                            <CopyButton />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}