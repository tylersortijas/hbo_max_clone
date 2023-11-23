import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForYouList = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }

        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(
                    (<div className="foryou-list__thumbnail">
                        <img src="https://m.media-amazon.com/images/I/71CvJ26Xc8L.jpg" alt="Rick and Morty Show Poster" />
                        <div className="foryou-list__top-layer">
                            <FontAwesomeIcon className="fa-play" icon={faPlay} />
                        </div>
                    </div>), 10
                )}
            </div>
        </div>
    )
};

export default ForYouList;