
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [users, setUsers] = useState([]);
 
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(' http://localhost:3008/user');
//         setUsers(result.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h2>{user.userName}</h2>
//           <ul>
//             {user.shows.map(show => (
//               <li key={show.id}>
//                 <h3>{show.name}</h3>
//                 <img src={show.img} alt="i" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

      


// export default Home






































import React, { useEffect,useState } from 'react'
import cind from "./cind.jpg"
import axios from 'axios';

const Home = () => {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3008/user');
        setData(result.data);
        console.log(Data,"ji")
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" grid grid-cols-3  ">
  
     {Data.map(item=>(
         <div  key={item.id} className="" >
              
          {item.shows.map(show=>(
            
              <div  className='group group/item singleJob w-[250px] p-[20px]  bg-white rounded-[10px] hover:bg-purple-200 shadow-lg shadow-greyIsh
              -400/700 hover:shadow-lg'  >
                  <span className='block justify-between items-center gap-4 '>
                      <img src={show.img} alt="Cindrella"  />
                      <h1 className='text-[16px] font-semibold group-hover:text-white text-center '>
                          {show.name}
                      </h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum vel quo eveniet quaerat alias deserunt quos neque excepturi!
                      </p>
       
                  </span>
       
              </div>

          ))
            
          }

       

     </div>
     ))} 
    </div>
  )
}

export default Home
