import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'

export const Detailpage = () => {
  let index = sessionStorage.getItem("item_id");
  let user = JSON.parse(sessionStorage.getItem("user")) || {};
  let [userdata, setUser] = useState({});
  if(user.index==index){
    loading = false;
    setUser(user);
  }else{
    var {list, loading} = useFetch("https://potterapi-fedeperin.vercel.app/en/characters", index);
    setUser(list)
    sessionStorage.setItem("user", JSON.stringify(list));
  }

  return (
    <div className=''>
        <div className='mt-[2%] bg-white h-[59vh] rounded-md p-[3%]'>
            {
              Object.keys(user).length>0?(<div className='flex'>
                  <div className='w-[40%]'>
                   <img className='w-[80%]' src={userdata.image} alt={userdata.fullName} />
                  </div>
                  <div>
                    <p className='text-2xl font-[600] text-cyan-800 leading-[1.2rem]'>{userdata.fullName}<br/>
                    <span className='text-sm text-sky-500'>Actor</span>
                    </p>
                    <p className='mt-[20%] text-[12px] font-[500] text-cyan-800'>ACHIEVEMENTS</p>
                    <p className='flex items-center'><span className='text-[20px]'>8.5</span>&#160; <i className="fa-solid fa-star text-cyan-500"></i><i className="fa-solid fa-star text-cyan-500"></i><i className="fa-solid fa-star text-cyan-500"></i><i className="fa-solid fa-star text-gray-300"></i></p>
                    <div className='mt-[5%] flex items-center gap-[20px]'>
                      <p className='font-[500] text-cyan-900 text-[15px]'><i className="fa-solid fa-message"></i> <span className=''>Send message</span></p>
                      <p className='font-[500] text-cyan-600 bg-sky-100 rounded-md px-[10px] py-[5px] text-[15px]'><i className="fa-solid fa-check"></i> <span className=''>Contacts</span></p>
                      <p className='text-gray-400 font-[500] text-[15px]'>Report user</p>
                    </div>

                    <div className='mt-[8%]'>
                      <span className='border-b-[2px] border-cyan-600 text-cyan-900 text-[15px] font-[500] pb-[2%]'><i className="fa-solid fa-user"></i> <span>About</span></span>
                    </div>
                    <div className='mt-[10%] font-[500] text-[14px] w-[80%]'>
                      <p className='flex justify-between'><span>Full Name:</span><span className='text-cyan-500'>{userdata.interpretedBy}</span></p>
                      <p className='mt-[2%] flex justify-between'><span>House:</span><span className='text-red-600'>{userdata.hogwartsHouse}</span></p>
                      <p className='mt-[2%] flex justify-between'><span>Nickname:</span><span className=''>{userdata.nickname}</span></p>
                      <p className='mt-[2%] flex justify-between'><span>Birthdate:</span><span className=''>{userdata.birthdate}</span></p>
                    </div>
                  </div>
              </div>):<>
              <div className="w-[100%] flex items-center justify-center">
                <div className="loader mt-[20%]"></div>
              </div>
              </>
            }
        </div>
    </div>
  )
}
