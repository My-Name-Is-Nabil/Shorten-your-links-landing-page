import GetStarted from "./GetStarted"
import '../scss/boost.scss';

export default function Boost(){
    return (
        <div className="boost">
            <div className="boost__title">
                Boost your links now
            </div>
            <GetStarted className="boost__get-started" />
        </div>
    );
}