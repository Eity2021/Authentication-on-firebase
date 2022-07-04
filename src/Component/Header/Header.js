import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../useFirebase/useFirebase";

const Header = () => {
  const {user, signOutWithGoogle} = useFirebase();
  return (
    <div className="header_area">
      <div>
        {" "}
        <Link className="logo" to="/">
          FIREBASE
        </Link>{" "}
      </div>
      <div>
        <Link to="/">Home</Link>
        {/* <span>{user?.displayName}</span> */}
        { 
          user?.uid ? 
          <button className="signOut" onClick={signOutWithGoogle}>sign out</button>:<Link to="/Login">Login</Link>}
      </div>
   
    </div>
  );
};

export default Header;
