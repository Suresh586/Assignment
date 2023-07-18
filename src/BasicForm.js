import "./basic.css";
import { FaUser } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import india from "./india.jpg";

const BasicForm = () => {
  return (
    <form>
      <div className="formdiv">
        <div>
          <label htmlFor="name">First Name</label>
          <br />
          <div className="divinput">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <br />
          <div className="divinput">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="lastName"
            />
          </div>
        </div>

        <div>
          <label htmlFor="name">E-Mail Address</label>
          <br />
          <div className="divinput">
            <div className="input-icon">
              <BiMailSend />
            </div>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">OTP</label>
          <br />
          <div className="divinput">
            <input
              type="text"
              id="name"
              className="input"
              placeholder="123456"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Phone Number</label>
          <br />
          <div className="divinput">
            <img src={india} className="image" alt="india" />
            <select>
              <option>+91</option>
              <option>+444</option>
            </select>

            <input
              type="text"
              id="name"
              className="input"
              placeholder="1234567890"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">OTP</label>
          <br />
          <div className="divinput">
            <div className="input-icon"></div>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="123456"
            />
          </div>
        </div>

        <div>
          <label htmlFor="name">Address</label>
          <br />
          <div className="divinput">
            <div className="input-icon">
              <FaMapMarkerAlt />
            </div>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="N0-93,skyfield,apartments"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">PINCODE</label>
          <br />
          <div className="divinput">
            <input
              type="text"
              id="name"
              className="input"
              placeholder="516502"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
