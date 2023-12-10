import React,{useState,useRef} from "react";
import Header from "./Header";
import checkValidForm from "../utils/validate.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import {BACKGROUNDIMAGE} from "../utils/constants.js";

const Login = () => {
  const[guestLogin,setGuestLogin]=useState({email:null,pass:null});
  const[isSignIn,setIsSignIn]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const dispatch=useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleGuestUser=()=>{
    setGuestLogin({email:"guest@gmail.com",pass:"Guest123"})
  }

  const handleFormSubmit=()=>{
    //validate form data
   const message= checkValidForm(email.current.value,password.current.value);
   setErrorMessage(message);

   //sign/sign up logic
   if(message) return;

    if(!isSignIn){
      //signup logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // const user = userCredential.user;
          //update store once userSignUp and put userName in store
        updateProfile(auth.currentUser, {
        displayName: name.current.value,
        }).then(() => {
          const {uid,email,displayName}= auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        }).catch((error) => {
        setErrorMessage(error.message);
        });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+" "+errorMessage);
        
        });

    }else{
        //signIn logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // const user = userCredential.user;
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });
    }



  }

  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div > 
      <Header/>
      <div className="absolute">
        <img className="h-screen object-cover  md:object-none md:w-screen" src={BACKGROUNDIMAGE}
        alt="bg-img"/>
      </div>
      
      <form onSubmit={(e)=>e.preventDefault()} className="p-12 absolute bg-black w-full md:w-3/12 my-20 md:my-40 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4 ">{isSignIn?"Sign In":"Sign Up"}</h1>
      {
        !isSignIn && <input ref={name} type="text" placeholder="Your Name" className="p-4 my-4 bg-slate-800 w-full rounded-lg"  />
      }
        <input ref={email} type="email" value={guestLogin.email} placeholder="Email Address" className="p-4 my-4 bg-slate-800 w-full rounded-lg"  />
        <input ref={password} type="password" value={guestLogin.pass}  placeholder="Password"  className="p-4 my-4 bg-slate-800 w-full rounded-lg" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
         { isSignIn && <button onClick={handleGuestUser} className="p-4 my-2 bg-red-700 w-full rounded-lg">Guest User</button>}
        <button onClick={handleFormSubmit} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignIn?"Sign In":"Sign Up"}</button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm} >{isSignIn?"New to Netflix? Sign Up Now":"Already an user? Sign In Here"}</p>
      </form>
    </div>
  )
}

export default Login
