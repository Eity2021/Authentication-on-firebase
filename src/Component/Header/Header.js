import { getAuth , signOut} from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";


const auth = getAuth(app);
const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  // const {user, signOutWithGoogle} = useFirebase();
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
        <Link to="/orders">Order</Link>
        <Link to="/sell">Sell</Link>
        <span>{user?.displayName}</span>
        { 
          user?.uid ? 
          <button className="signOut" onClick={() => signOut(auth)}>sign out</button>:<Link to="/login">Login</Link>}
      </div>
   
    </div>
  );
};

export default Header;
