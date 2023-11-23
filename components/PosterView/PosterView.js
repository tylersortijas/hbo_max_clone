import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PosterView = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }

        return thumbnails;
    }
    return (
        <div className="poster-view">
            <h3 className="poster-view__title">Movies</h3>
            <div className="poster-view__thumbnails">
                {loopComp(
                    (<div className="poster-view__thumbnail">
                        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt="Black Panther Poster" />
                        <div className="poster-view__top-layer">
                            <FontAwesomeIcon className="fa-play" icon={faPlay} />
                        </div>
                    </div>), 10
                )}
            </div>
        </div>
    )
};

export default PosterView;