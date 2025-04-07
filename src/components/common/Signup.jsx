// import React from 'react'
// import '../css/common.css'
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Bounce, Slide, toast, ToastContainer } from 'react-toastify';
// const Signup = () => {
//   const navigate = useNavigate()

//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const submitHandler = async (data) => {

//     data.roleId = "67ce6b6719aed5263956f3ba"
//     // console.log(data);
//     try {
//       const res = await axios.post("/signup", data);
//       console.log("Signup Success:", res.data);
//       if (res.status === 201) {
//        toast.success('Signup Sucessfully', {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Bounce,
//               });
//         setTimeout(() => {
//           navigate("/login")
//         }, 3000);
//       }
//       else {
//         toast.error('Already Signup', {
//           position: "top-center",
//           autoClose: 2000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           theme: "light",
//           transition: Slide,
//         });
//       }
//     } catch (error) {
//       toast.error('Already Signup', {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         theme: "light",
//         transition: Slide,
//       });
//       console.error(" signup Axios error:", error);
//     }
//   }


//   const validationSchema = {
//     userNameValidator: {
//       required: {
//         value: true,
//         message: "*Username is required"
//       },
//       minLength: {
//         value: 3,
//         message: "At least 3 characters"
//       },
//     },
//     emailValidator: {
//       required: {
//         value: true,
//         message: "*Email is required"
//       },
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Invalid Email Address",
//       },
//     },

//     passwordValidator: {
//       required: {
//         value: true,
//         message: "*password is required"
//       },
//       minLength: {
//         value: 6,
//         message: "Atleast 6 characters"
//       }
//     },
//     confirmPasswordValidator: {
//       required: {
//         value: true,
//         message: "*Confirm password is required"
//       },
//       validate: (value) => {
//         return value == watch("password") || "password do not match"
//       }
//     }
//   }

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//         transition={Bounce}
//       />
//       <div className="signup-container">
//         <h2 className="signup-title">Sign Up</h2>
//         <p className="signup-text">Create an account to get started.</p>

//         <form className="signup-form" onSubmit={handleSubmit(submitHandler)}>
//           <div className="signup-form-group">
//             <label>Full Name</label>
//             <input type="text" placeholder="Enter your full name"  {...register("username", validationSchema.userNameValidator)} />
//             <span style={{ color: 'red' }}>
//               {
//                 errors.username?.message
//               }
//             </span>
//           </div>

//           <div className="signup-form-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email"  {...register("email", validationSchema.emailValidator)} />
//             <span style={{ color: 'red' }}>
//               {
//                 errors.email?.message
//               }
//             </span>
//           </div>

//           <div className="signup-form-group">
//             <label>Password</label>
//             <input type="password" placeholder="Create a password" {...register("password", validationSchema.passwordValidator)} />
//             <span style={{ color: 'red' }}>
//               {
//                 errors.password?.message
//               }
//             </span>
//           </div>

//           <div className="signup-form-group">
//             <label>Confirm Password</label>
//             <input type="password" placeholder="Confirm your password" {...register("confirmPassword", validationSchema.confirmPasswordValidator)} />
//             <span style={{ color: 'red' }}>
//               {
//                 errors.confirmPassword?.message
//               }
//             </span>
//           </div>
//           <button type="submit" className="signup-btn" >Sign Up</button>

//           <p className="signup-switch-text">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>

//     </>
//   )
// }

// export default Signup
import React, { useState } from 'react'
import '../css/common.css'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, Slide, toast, ToastContainer } from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";
const Signup = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("User");
  const submitHandler = async (data) => {

    data.roleId = role === "User" ? "67ce6b6719aed5263956f3ba" : "67ce6a4f19aed5263956f3b3"    // console.log(data);
    setLoading(true);
    try {
      const res = await axios.post("/signup", data);
      console.log("Signup Success:", res.data);
      if (res.status === 201) {
       toast.success('Signup Sucessfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
              });
        setTimeout(() => {
          navigate(role === "User" ? "/login" : "/admin"); 
                }, 3000);
      }
      else {
        toast.error('Already Signup', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          transition: Slide,
        });
      }
    } catch (error) {
      toast.error('Already Signup', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
      console.error(" signup Axios error:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  }


  const validationSchema = {
    userNameValidator: {
      required: {
        value: true,
        message: "*Username is required"
      },
      minLength: {
        value: 3,
        message: "At least 3 characters"
      },
    },
    emailValidator: {
      required: {
        value: true,
        message: "*Email is required"
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Email Address",
      },
    },

    passwordValidator: {
      required: {
        value: true,
        message: "*password is required"
      },
      minLength: {
        value: 6,
        message: "Atleast 6 characters"
      }
    },
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "*Confirm password is required"
      },
      validate: (value) => {
        return value == watch("password") || "password do not match"
      }
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-text">Create an account to get started.</p>

        <form className="signup-form" onSubmit={handleSubmit(submitHandler)}>
          <div className="signup-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name"  {...register("username", { required: "*Username is required", minLength: 3 })} />
            <span style={{ color: 'red' }}>{errors.username?.message}</span>
          </div>

          <div className="signup-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email"  {...register("email", { required: "*Email is required" })} />
            <span style={{ color: 'red' }}>{errors.email?.message}</span>
          </div>

          <div className="signup-form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" {...register("password", { required: "*Password is required", minLength: 6 })} />
            <span style={{ color: 'red' }}>{errors.password?.message}</span>
          </div>
          
          <div className="signup-form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" {...register("confirmPassword", { required: "*Confirm password is required", validate: (value) => value === watch("password") || "Passwords do not match" })} />
            <span style={{ color: 'red' }}>{errors.confirmPassword?.message}</span>
          </div>

          {/* Role Selection */}
          {/* <div className="signup-form-group">
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div> */}

<button type="submit" className="signup-btn" disabled={loading}>
            {loading ? <PulseLoader color="black" size={10} /> : 'Sign Up'}
          </button>
         <p className="signup-switch-text">Already have an account? <Link to="/login">Login</Link></p>
        </form>
        {loading && <p>Loading...</p>} {/* Simple loader */}
      </div>
    </>
  )
}

export default Signup