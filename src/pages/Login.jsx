import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useFirebase } from "../context/Firebase"

export const Login = () => {
    let {loginUserwithEmail, loading} = useFirebase();
    function handleSubmit(e){
        e.preventDefault();
        loginUserwithEmail(e.target.email.value, e.target.password.value);
    }
    useEffect(()=>{
        document.getElementById("submit").disabled = document.getElementById("submit").disabled===true?false:true;
        document.getElementById("submit").classList.toggle("disable")
    }, [loading])
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center mt-[2%] bg-white h-[59vh] rounded-md p-[3%]'>
            <h2 className="font-[500] text-xl">Sign In</h2>
            <form onSubmit={handleSubmit} className="w-[30%] mt-[20px]">
                <div className="flex flex-col my-[10px]">
                    <label htmlFor="email">Email</label>
                    <input className="px-[12px] py-[8px] text-[14px] outline-none border-[1px] border-gray-400 rounded-md" name="email" id="email" type="email" required/>
                </div>
                <div className="flex flex-col mt-[15px] mb-[10px]">
                    <label htmlFor="password">Password</label>
                    <input className="px-[12px] py-[8px] text-[14px] outline-none border-[1px] border-gray-400 rounded-md" name="password" id="password" type="password" required/>
                </div>
                <div className="mt-[25px]">
                    <button id="submit" className="bg-[#a2b0c7] text-white font-[600] px-[10px] py-[7px] text-center rounded-md" type="submit">Sign in</button>
                    <p className="mt-[5px]">Dont't have an account? <Link className="text-sky-600" to="/signup">Signup</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
