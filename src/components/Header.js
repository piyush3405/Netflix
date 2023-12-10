import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import {signOut,onAuthStateChanged } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
import {LOGO,USERICON} from "../utils/constants.js";

const Header = () => {

  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch =useDispatch();

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          //User signIn or signUp
          const {uid,email,displayName}= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      
      //unsubscribe when my components unmounts
      return ()=>unsubscribe();
  },[])

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      // navigate("/error");
    });
  }

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img 
       src={LOGO}
       alt="logo" className="w-[9rem] md:w-44 mx-auto md:mx-0" 
      />
     {user && <div className="flex p- mx-auto md:mx-0">
      <img className="h-12 w-12 "
        src={USERICON}
        alt="usericon" 
      />
      <button onClick={handleSignOut} className="font-bold text-white">signOut</button>
      </div>}
     
    </div>
  );
};

export default Header;
