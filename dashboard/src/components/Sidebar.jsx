import React from 'react'
import { AiFillFire,AiTwotoneHome} from "react-icons/ai";
import { MdAccountCircle} from "react-icons/md";
import { BsMenuButtonWide} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
    <div className='bg-purple-300  h-full fixed lg:static w-full -left-full top-0  ' >
        {/*Profile*/}

        <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
            <img src="https://img.freepik.com/free-vector/many-cute-unicorns-cartoon-character-with-castle-cloud_1308-57351.jpg?w=900&t=st=1677069946~exp=1677070546~hmac=f419cc209d8431b2a57a09d41ad7d04a2cef3c95fd95029361d178554399b789" alt="DashbordImage"
            className='w-20 h-20 object-cover rounded-full' />
            <h1 className='text-2xl text-white font-bold font-serif'>Fairy Tail</h1>
            <p className='font-serif text-white '  >Journey To Your Dream</p>
        </div>
        {/*Nav*/}
        <div className='bg-fuchsia-300  p-8 rounded-tr-[7em] text-white h-[70vh] pt-[2em] mt-[2rem]'>
        <nav className='flex flex-col gap-6' >
            <a href='#' className='flex items-center gap-4 py-2 px-4  rounded-xl hover:bg-fuchsia-400'>
                <AiTwotoneHome/>
                Home
            </a>
            <a href='#' className=' flex items-center gap-4 py-2 px-4  rounded-xl hover:bg-fuchsia-400'>
                <MdAccountCircle/>
                Profile
            </a>
            <a href='#' className=' flex items-center gap-4 py-2 px-4  rounded-xl hover:bg-fuchsia-400'>
                <AiFillFire/>
                Trending
            </a>
            

        </nav>
        </div>
      
    </div>
    {/*Button*/}
    <button className='fixed right-4 bottom-4 text-xl bg-purple-500 p-3 rounded-full text-white'>
        <BsMenuButtonWide/>

    </button>
    </div>
  )
}

export default Sidebar
