const checkValidForm=(email,password)=>{

const isValidEmail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
const isValidPass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

if(!isValidEmail) return "Email is not valid";
if(!isValidPass) return "Password is not valid";

return null;

}

export default checkValidForm;