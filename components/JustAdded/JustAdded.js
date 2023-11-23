import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JustAdded = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }

        return thumbnails;
    }
    return (
        <div className="just-added">
            <h3 className="just-added__title">Just Added</h3>
            <div className="just-added__thumbnails">
                {loopComp(
                    (<div className="just-added__thumbnail">
                        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt="Black Panther Poster" />
                        <div className="just-added__top-layer">
                            <FontAwesomeIcon className="fa-play" icon={faPlay} />
                        </div>
                    </div>), 10
                )}
            </div>
        </div>
    )
};

export default JustAdded;