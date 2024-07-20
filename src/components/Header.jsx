import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

export const Header = () => {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/signin')
  }
  return (
    <div className="p-[1%] w-[100%] flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="w-[100px]" src={logo} alt="Hogwarts logo" />
          </Link>
        </div>
        <div>
          <button onClick={handleClick} className="login bg-[#a2b0c7] text-white font-[600] px-[10px] py-[7px] text-center rounded-md">Login</button>
        </div>
    </div>
  )
}
