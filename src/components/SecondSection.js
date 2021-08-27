import '../scss/second-section.scss';
import Card from '../components/Card';
import iconBrandRecognition from '../images/icon-brand-recognition.svg';
import iconDetailedRecords from '../images/icon-detailed-records.svg';
import iconFullyCustomizable from '../images/icon-fully-customizable.svg';

export default function SecondSection(){
    return (
        <div className="second-section">
            <div className="second-section__title">
                Advanced Statistics
            </div>
            <div className="second-section__content">
                Track how links are preforming across the web with our advanced statistics dashboard
            </div>
            <div className="second-section__cards">
                <div className="line-across">
                    
                </div>
                <div className="line-across-vertical">
                    
                </div>
                <Card title="Brand Recognition" image={iconBrandRecognition} style={{
                    '--order': 1,
                }}>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                </Card> 
                <Card title="Detailed Records" image={iconDetailedRecords} style={{
                    '--order': 2,
                }}>
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                </Card> 
                <Card title="Fully Customizable" image={iconFullyCustomizable} style={{
                    '--order': 3
                }}> 
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                </Card>
            </div>
        </div>
    )
}