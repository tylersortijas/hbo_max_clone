'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../components/HBOProvider.js";

export default function CreateUser() {
    const globalState = useStateContext();
    console.log(globalState);

    return (
        <div>
            <div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo" />
                    <span className="create-user__title">
                        Who Is Watching?
                    </span>
                </div>
                <div className="create-user__form">
                    <img className="create-user__user-img" alt="Jon Snow From Game of Thrones" src={globalState.defaultUserImg} />
                    <div className="create-user__input-group">
                        <label>Name</label>
                        <input onChange={globalState.createUserAction} value={globalState.user} type="text" className="create-user__input-text" />
                        <div className="create-user__colors">
                            <div className="create-user__color create-user__color--active" style={{ background: 'rgb(2, 27, 64)', background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(119, 30, 135, 1) 100%)' }}></div>
                            <div className="create-user__color" style={{ background: 'rgb(2,0,36)', background: 'linear-gradient(165deg, rgba(2,0,36,1) 0%, rgba(0,141,170,1) 100%)' }}></div>
                            <div className="create-user__color" style={{ background: 'rgb(255,2,232)', background: 'linear-gradient(339deg, rgba(255,2,232,1) 0%, rgba(124,91,0,1) 100%)' }}></div>
                            <div className="create-user__color" style={{ background: 'rgb(13,0,128)', background: 'linear-gradient(203deg, rgba(13,0,128,1) 0%, rgba(4,124,0,1) 100%)' }}></div>
                            <div className="create-user__color" style={{ background: 'rgb(0,236,233)', background: 'linear-gradient(141deg, rgba(0,236,233,1) 0%, rgba(86,1,92,1) 100%)' }}></div>
                        </div>
                    </div>
                </div>
                <div className="create-user__buttons">
                    <button className="create-user__cancel">Cancel</button>
                    <button className="create-user__save">Save</button>
                </div>
            </div>
        </div>
    )
}
