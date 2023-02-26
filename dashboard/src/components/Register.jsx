import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Register = () => {

   const[formData,setFormData]=useState({
    userName:"",
    Password:"",
    confirmPassword:""
 
   })


const [formErrors, setFormErrors] = useState({
    userName: '',
    Password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate()




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear the error message when the user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.userName) {
      errors.userName = 'Please enter your name';
    }
    else if(/^[a-zA-Z0-9]{3,20}$/.test(formData.userName))
    {
        errors.userName = `Have a length \n between 3 and 20 characters Can  contain uppercase and lowercase letters (a-z, A-Z),  numbers (0-9) `
    }



    if (!formData.Password) {
      errors.Password = 'Please enter your Password';
    } else if (formData.Password.length < 8) {
      errors.Password = 'Password must be at least 8 characters long';
    }

    if(formData.Password!==formData.confirmPassword)
    {
         errors.confirmPassword="Password doesn't match"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Form submitted');
      // Make an API call or some other action here to submit the form data
    }
  };

  const dispatch = useDispatch()
  const register = ()=>
  {
    dispatch({
      
          type : "REGISTER",
          payload:formData
            
          
     
    })
  navigate("/login")

  }

 

  
  return (
    <div>

<section className=' min-h-screen flex items-center justify-center  '>

            {/*Login Container*/}
            <div className='bg-blue-100 shadow-lg max-w-3xl flex rounded-2xl p-5' >
           
            {/*Login Form*/}
            <div className=' px-16'>
                <h2 className='font-bold text-2xl '>Register To The Dream</h2>

                <form  onSubmit={handleSubmit}
                
                className='flex flex-col gap-4'>
                    <label htmlFor='userName'></label>
                    <input 
                    className='p-2 mt-8 rounded-xl border'
                    type="text"
                    name="userName"
                    id='userName'
                    value={formData.userName}
                    placeholder='Enter Name'
                    autoComplete='off'
                    onChange={handleChange}
                    />
                     {formErrors.userName && <p>{formErrors.userName}</p>}
                     <label htmlFor="Password"></label>
                    <input
                      className='p-2 mt-8 rounded-xl border'
                    type="Password"
                    name="Password"
                    id='Password'
                    autoComplete='off'
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder='Enter Password' 
                    required
                    />
                     {formErrors.Password && <p>{formErrors.Password}</p>}

                    <h4>{formData.Password}</h4>
                    <label htmlFor="confirmPassword"></label>
                    <input
                    className='p-2 mt-8 rounded-xl border'
                    type="Password"
                    name="confirmPassword"
                    id='confirmPassword'
                    onChange={handleChange}
                    placeholder='ReEnter Password'
                    required
                    />
                     {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}

                   <button onClick={register}
                   className='bg-blue-300 p-3 rounded-3xl mt-5 hover:text-white font-bold font-serif'>
                    Register     
                    </button>
                 </form>
                 <NavLink to="/login" className='flex  items-center justify-center mt-9 ' >
                       Already in?
                 </NavLink>

            </div>

          
            </div>

        </section>

      
    </div>
  )
}

export default Register
