
import React,{useState,useEffect} from 'react';

import Card from './components/Card';
// import { NavLink } from 'react-router-dom';
import Footer from './Footer'


const Home = () => {

   const [search, setSearch] = useState('')
   const [foodCat, setfoodCat] = useState([]);
   const [foodItem, setfoodItem] = useState([]);


  const loadData= async()=>{
    let response=await fetch("/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    })

    response=await response.json();


    setfoodItem(response[0]);
    setfoodCat(response[1]);



    console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])


  return (
    <>

    <div> 

    <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
  style={{objectFit:"contain !important"}}
>

<div className="carousel-inner" id= "carousel">

  < div className='carousel-caption' style={{zIndex:"10"}}>

    <div className=' mb-3 food_message fw-bold fs-2'>Hungry? Brace yourself. Foodie joyride incoming!</div>
  <div className="d-flex justify-content-center">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e=>{setSearch(e.target.value)})} />
    
  </div>
  </div>

  
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/featured/1300x700?burger" style={{filter: "brightness(50%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/featured/1300x700?pizza" style={{filter: "brightness(50%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/featured/1300x700?food" style={{filter: "brightness(50%)"}} alt="..." />
     
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>






    </div>







        <div className='container'>
          {
            foodCat !== []
              ? foodCat.map((data)=>{
                return (
                  <div className='row mb-3'>
                  <div key={data._id} className=' fs-2 mt-3 fw-bold food_item_name'>      {data.CategoryName}
                  </div>
                  <hr/>
                  {foodItem !==[] ? foodItem.filter((item)=>
                    (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                  ).map(filterItems=>{
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 '>
                        <Card foodItem={filterItems}
                        option={filterItems.options[0]}
                        
                        ></Card>
                        </div>
                    )
                  })
                   : <div> No such data found </div>}
                  </div>
                )
              }) 
              :
              ""
          }
        </div>



        <div>
        {/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div className="col-md-4 d-flex align-items-center">
    <NavLink
      to="/"
      className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
    >
    </NavLink>
    <span className="text-muted ">© 2021 Company, Inc</span>
  </div>
</footer> */}
    <Footer/>

        </div>
    </>
  );
}

export default Home;
