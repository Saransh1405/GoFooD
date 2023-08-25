// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'

// const Signup = () => {

//   let navigate = useNavigate();
//     const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         const response= await
//         fetch("/api/createuser",{
//             method: 'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
//         });

//         const json=await response.json();
//         console.log(json);

//         if(!json.success){
//             alert("Enter valid credentials");
//         }
//         else{
//           localStorage.setItem('token', json.authToken)
//           navigate("/login")
//         }
//     }


//     const onChange=(event)=>{
//         setcredentials({...credentials,[event.target.name]:event.target.value})
//     }


//   return (
//     <>
//         <section  onSubmit={handleSubmit} className=" vh-100" style={{ backgroundColor: "#eee" }}>
//   <div className="container h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-lg-12 col-xl-11">
//         <div className="card text-black" style={{ borderRadius: 25 }}>
//           <div className="card-body p-md-5">
//             <div className="row justify-content-center">
//               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 p-text">
//                   Sign up
//                 </p>
//                 <form className="mx-1 mx-md-4">
//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-user fa-lg me-3 fa-fw" />
//                     <div className="form-outline flex-fill mb-0">
//                       <input
//                         type="text"
//                         id="form3Example1c"
//                         className="form-control"
//                         name='name'
//                         value={credentials.name}
//                         onChange={onChange}
//                       />
//                       <label className="form-label" htmlFor="name">
//                         Your Name
//                       </label>
//                     </div>
//                   </div>
//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-envelope fa-lg me-3 fa-fw" />
//                     <div className="form-outline flex-fill mb-0">
//                       <input
//                         type="email"
//                         id="form3Example3c"
//                         className="form-control"
//                         name='email'
//                         value={credentials.email}
//                         onChange={onChange}
//                       />
//                       <label className="form-label" htmlFor="form3Example3c">
//                         Your Email
//                       </label>
//                     </div>
//                   </div>
//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-lock fa-lg me-3 fa-fw" />
//                     <div className="form-outline flex-fill mb-0">
//                       <input
//                         type="password"
//                         id="form3Example4c"
//                         className="form-control"
//                         name='password'
//                         value={credentials.password}
//                         onChange={onChange}
//                       />
//                       <label className="form-label" htmlFor="form3Example4c">
//                         Password
//                       </label>
//                     </div>
//                   </div>
//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-key fa-lg me-3 fa-fw" />
//                     <div className="form-outline flex-fill mb-0">
//                       <input
//                         type="geolocation"
//                         id="form3Example4cd"
//                         className="form-control"
//                         name='geolocation'
//                         value={credentials.geolocation}
//                         onChange={onChange}
//                       />
//                       <label className="form-label" htmlFor="form3Example4cd">
//                         Location
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-check d-flex justify-content-center mb-5">
//                     <input
//                       className="form-check-input me-2"
//                       type="checkbox"
//                       defaultValue=""
//                       id="form2Example3c"
//                     />
//                     <label className="form-check-label" htmlFor="form2Example3">
//                       I agree all statements in{" "}
//                       <a href="#!">Terms of service</a>
//                     </label>
//                   </div>
//                   <div className="d-inline  mx-2 mb-3 mb-lg-4">
//                     {/* <button type="submit" className="fw-bold btn btn-primary btn-lg register_btn"> */}
//                     <Link to="/login" className= "  fw-bold  btn btn-lg btn primary text-white register_btn">  Register</Link>
                     
//                     </div>

//                     <div className="d-inline  mx-2 mb-3 mb-lg-4">
//                 <Link to="/login" className= "  fw-bold  btn btn-lg register_btn1"> Already a user</Link>

//                   </div>
//                 </form>
//               </div>
              
              

//               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                 <img
//                   src="https://source.unsplash.com/featured/1300x700?food"
//                   className="img-fluid"
//                   alt="Sample "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default Signup


import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'


export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
  let [address, setAddress] = useState("");
  let navigate = useNavigate()

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   let navLocation = () => {
  //     return new Promise((res, rej) => {
  //       navigator.geolocation.getCurrentPosition(res, rej);
  //     });
  //   }
  //   let latlong = await navLocation().then(res => {
  //     let latitude = res.coords.latitude;
  //     let longitude = res.coords.longitude;
  //     return [latitude, longitude]
  //   })
  //   // console.log(latlong)
  //   let [lat, long] = latlong
  //   console.log(lat, long)
  //   const response = await fetch("/api/getlocation", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ latlong: { lat, long } })

  //   });
  //   const { location } = await response.json()
  //   console.log(location);
  //   setAddress(location);
  //   setCredentials({ ...credentials, [e.target.name]: location })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/createuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('token', json.authToken)
      navigate("/login")

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
    <div>
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',backgroundSize: 'cover',height: '100vh',paddingTop:'3rem' }}>

      
        <div className='container' >
          <form className='from w-50 m-auto border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3 ">
              <label htmlFor="name" className="form-label text-white">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label text-white">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label text-white">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
          </div>
          
        </div>
      </div>
      <div className='mt-1'>
        <Footer/>
      </div>

      </>
  )
}