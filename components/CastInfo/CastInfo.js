import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CastInfo = () => {
    return (
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast & Crew
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>
                        James
                    </li>
                    <li>
                        George Lucas
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Billy
                    </li>
                    <li>
                        Lui Kang
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Raul
                    </li>
                    <li>
                        Rick
                    </li>
                </ul>
            </div>
            <div className="cast-info__group-title">
                Director
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>
                        James
                    </li>
                    <li>
                        George Lucas
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CastInfo;