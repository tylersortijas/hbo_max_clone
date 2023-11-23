import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>
        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" alt="Jon Snow From Game of Thrones" src="https://images.cdn.prd.api.discomax.com/2023%2F3%2F31%2Fd401a2a0-d0ac-4a80-ac13-d9d34ec41c8d.png" />
            <div className="login-user__user-name">Joby</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>
  )
}
