import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
      })
},[]);

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix logo"/>
        {user && 
          <div className="flex items-center p-2">
            <img className="w-9 h-9" src={user?.photoURL} alt="usericon" />
            <button onClick={handleSignOut} className="font-bold text-white ml-3">Sign Out</button>
          </div>
          }
    </div>
  )
}

export default Header;