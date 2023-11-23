import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars, faSearch
} from "@fortawesome/free-solid-svg-icons";
import Account from "../Account/Account.js";
import SearchModal from "../SearchModal/SearchModal.js";

const Header = () => {
    return (
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="top-header__search-btn">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img className="top-header__user-img" src="https://images.cdn.prd.api.discomax.com/2023%2F3%2F31%2Fd401a2a0-d0ac-4a80-ac13-d9d34ec41c8d.png" alt="Jon Snow from Game of Thrones" />
                <div className="top-header__user-name">Bryant</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header;