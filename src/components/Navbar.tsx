import logo from '../assets/logo.svg'
import lightsearch from '../assets/search-light.svg'
import darksearch from '../assets/search-dark.svg'
import { IoCloseCircleOutline } from "react-icons/io5";
import notification from '../assets/notification.svg'
import user from '../assets/user.png'
import { navbarProps } from '../types/types';
import { FC } from 'react';

const Navbar: FC<navbarProps> = ({onchange , focus, onclick, value}) => {
  return (
    <div className='flex justify-between items-center py-3'>
        <div className='flex items-center gap-5'>
            <img src={logo} alt="" />
            <h1 className='text-xl font-bold'><span className='text-secondary'>Books</span> List</h1>
            <div className={`${focus ? 'bg-white' : 'bg-dark'} flex gap-3 items-center rounded-md w-[380px] px-[26px] py-3`}>
                <img src={focus ? darksearch : lightsearch} alt="image" />
                <input value={value} className={` ${!focus ? 'bg-dark' : ''}  flex-1 outline-none`} onChange={onchange} type="text" placeholder='Search for any training you want ' />
                {focus && 
                  <button onClick={onclick} ><IoCloseCircleOutline className='text-xl' /></button>}
            </div>
        </div>
        <div className='flex items-center gap-7'>
            <img src={notification} alt="image" />
            <img src={user} alt="image" />
        </div>
    </div>
  )
}

export default Navbar