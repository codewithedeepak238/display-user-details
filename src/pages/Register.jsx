import { Link } from "react-router-dom"
import { useFirebase } from "../context/Firebase"
import { useEffect } from "react";

export const Register = () => {
    let {createUserwithEmail, loading} = useFirebase();
    
    function handleSubmit(e){
        e.preventDefault();
        createUserwithEmail(e.target.name.value, e.target.email.value, e.target.password.value);
    }
    useEffect(()=>{
        document.getElementById("submit").disabled = document.getElementById("submit").disabled===true?false:true;
        document.getElementById("submit").classList.toggle("disable")
    }, [loading])
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center mt-[2%] bg-white h-[59vh] rounded-md p-[3%]'>
                <h2 className="font-[500] text-xl">Sign Up</h2>
                <form onSubmit={handleSubmit} className="w-[30%] mt-[20px]">
                    <div className="flex flex-col my-[10px]">
                        <label htmlFor="name">Name</label>
                        <input className="px-[12px] py-[8px] text-[14px] outline-none border-[1px] border-gray-400 rounded-md" name="name" id="name" type="text" required />
                    </div>
                    <div className="flex flex-col my-[10px]">
                        <label htmlFor="email">Email</label>
                        <input className="px-[12px] py-[8px] text-[14px] outline-none border-[1px] border-gray-400 rounded-md" name="email" id="email" type="email" required />
                    </div>
                    <div className="flex flex-col mt-[15px] mb-[10px]">
                        <label htmlFor="password">Password</label>
                        <input className="px-[12px] py-[8px] text-[14px] outline-none border-[1px] border-gray-400 rounded-md" name="password" id="password" type="password" required />
                    </div>
                    <div className="mt-[25px]">
                        <button id="submit" className="bg-[#a2b0c7] text-white font-[600] px-[10px] py-[7px] text-center rounded-md" type="submit">Sign up</button>
                        <p className="mt-[5px]">Already have an account? <Link className="text-sky-600" to="/signin">Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
