import '../scss/first-section.scss';
import image from '../images/illustration-working.svg';
import GetStarted from './GetStarted.js';

export default function FirstSection(){
    return (
        <section className="first-section">
            <img className="first-section__image" src={image} alt="" />
            <div className="first-section__title">
                More than just shorter links
            </div>
            <div className="first-section__content">
                Build your brand’s recognition and get detailed insights on how your links are performing.
            </div>
            <GetStarted />
        </section>
    );
}