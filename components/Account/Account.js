import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Account = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }

        return thumbnails;
    }

    return (
        <div className="account">
            <div className="account__details">
                <div className="account__title">My List</div>
                <div className="account__watch-list">
                    {loopComp(
                        (<div className="account__watch-video">
                            <img src="https://m.media-amazon.com/images/I/71zEeojFg5L._AC_SY879_.jpg" alt="Black Widow Poster" />
                            <div className="account__watch-overlay">
                                <div className="account__watch-buttons">
                                    <div className="account__watch-circle">
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className="account__watch-circle">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                </div>
                            </div>
                        </div>), 6
                    )}
                </div>
            </div>
            <div className="account__menu">
                <ul className="account__main">
                    <li>
                        <a href="/" className="active">My List</a>
                    </li>
                </ul>
                <div className="side-nav__divider" />
                <ul className="account__main">
                    <li>
                        <a href="/">Account</a>
                    </li>
                </ul>
                <ul className="account__main">
                    <li>
                        <a href="/">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Account;