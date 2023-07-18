import "./App.css";

import BasicForm from "./BasicForm";
import Header from "./Header/header";
import UserImage from "./user/userImage";
import UserPic from "./user/userpic";

function App() {
  return (
    <div>
      <Header />
      <div className="user-section">
        <BasicForm />
        <UserPic />
        <UserImage />
      </div>
    </div>
  );
}

export default App;
