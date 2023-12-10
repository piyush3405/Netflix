import {useRouteError,useNavigate} from "react-router-dom"; 
import { useSelector} from "react-redux";

const Error = () => {
    const err=useRouteError();
    const navigate=useNavigate();
     const user=useSelector(store=>store.user);

    const handleClick=()=>{
        if(user){
            navigate("/browse");
        }else{
             navigate("/");
        }
    }

  return (
    <div className="bg-pink-100 h-screen">
      <h1 className="font-bold text-3xl text-rose-500 flex justify-center py-4">Oops!!</h1>
      <h2 className="font-bold text-3xl text-rose-500 flex justify-center py-4">Something went wrong!!</h2>
      <h2 className="font-bold text-3xl text-rose-500 flex justify-center py-4">{err.status+": "+err.StatusText}</h2>
      <div className="flex justify-center py-6">
      <button onClick={handleClick} className="bg-pink-500 p-5 m-5 font-bold text-3xl text-white rounded-full hover:bg-violet-600 drop-shadow-xl ">Back</button>
      </div>
    </div>
    
  )
}

export default Error
