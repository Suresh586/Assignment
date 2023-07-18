import {HiOutlineUser} from "react-icons/hi"
import {CiMail, CiLocationOn} from "react-icons/ci"
import {BiCircle} from "react-icons/bi"

import "./user.css"

const UserImage = () => (
    <div class="user-card">
        <img src="https://res.cloudinary.com/djugcf64d/image/upload/v1689669817/BG_Removed_T-shirt_2_lap4q9.png" alt="app logo" class="user-card-image" />
        <div class="user-deatils-card">
            <div class="user-details">
                <HiOutlineUser className="user-icons"/>
                <h1>Usman Kumar</h1>
            </div>
            <div class="user-details card">
                <CiMail className="user-icons"/>
                <p> usmanndako@gmail.com</p>
            </div>
            <div class="location-card">
                <div class="location-deatils">
                    <div class="user-details card">
                        <CiLocationOn className="user-icons"/>
                        <p> Bengaluru</p>
                    </div>
                    <div class="user-details card">
                        <BiCircle className="user-icons"/>
                        <p>ID- 28308</p>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/djugcf64d/image/upload/v1689669834/Vector_zeukso.svg" class="scanner" alt="user"/>
            </div>
        </div>
    </div>
)

export default UserImage