import React from 'react'
import cind from "./cind.jpg"

const Home = () => {
  return (
    <div>
      <div >
        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-purple-200 shadow-lg shadow-greyIsh
        -400/700 hover:shadow-lg' >
            <span className='block justify-between items-center gap-4 '>
                <img src={cind} alt="Cindrella"  />
                <h1 className='text-[16px] font-semibold group-hover:text-white text-center '>
                    Cindrella
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum vel quo eveniet quaerat alias deserunt quos neque excepturi!
                </p>

            </span>

        </div>

      </div>
      
    </div>
  )
}

export default Home
