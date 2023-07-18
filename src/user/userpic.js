import {FiUploadCloud} from "react-icons/fi"
import {AiOutlineDelete} from "react-icons/ai"


import './userPic.css'
const UserPic=()=>{
    return <div class="user-photo-container">
    <div class="upload-container">
        <button className="button">
        <FiUploadCloud className="upload"/>
        </button>
        <button className="button">
        <AiOutlineDelete className="upload"/>
        </button>
    </div>
</div>

}
export default UserPic