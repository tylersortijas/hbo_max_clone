import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchModal = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }

        return thumbnails;
    }
    return (
        <div className="search-modal">
            <div className="search-modal__input-group">
                <input className="search-modal__input" type="text" placeholder="search for a title" value="" />
                <div className="search-modal__close-btn">
                    <FontAwesomeIcon className="fa-times" icon={faTimes} />
                </div>
            </div>
            <h3 className="search-modal__title">Popular Searches</h3>
            <div className="search-modal__thumbnails">
                {loopComp(
                    (<div className="search-modal__thumbnail">
                        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt="Black Panther Poster" />
                        <div className="search-modal__top-layer">
                            <FontAwesomeIcon className="fa-play" icon={faPlay} />
                        </div>
                    </div>), 10
                )}
            </div>
        </div>
    )
}

export default SearchModal;