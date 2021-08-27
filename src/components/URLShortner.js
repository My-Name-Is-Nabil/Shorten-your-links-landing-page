import '../scss/url-shortner.scss';

export default function URLShortner(){
    return (
        <div className="url-shortner-wrapper">
            <div className="url-shortner">
                <input className="url-shortner__input" type="text" name="url"
                    placeholder="Shorten a link here.." />
                <div className="shorten-it">
                    Shorten It !
                </div> 
            </div>
            <div className="grey-background">
            </div>
        </div>
    );
}