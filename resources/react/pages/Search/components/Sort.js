import React, { useEffect, useState } from 'react'
import * as FaIcon from "react-icons/fa"
import * as BiIcon from "react-icons/bi"
import axios from 'axios'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Sort = ({data, setData}) => {
   const [search, setSearch] = useState("")
  const history = useHistory();

   
    const handleSearch = (e) =>{
        e.preventDefault()
    }
    const handleRegister = () =>{
        return history.push("/home/register")
    }
    const dataToSubmit = {
        search: search,
    };  
    useEffect(() => {
       
        axios.post('/home/drivers/search', dataToSubmit )
        .then(res => {
            setData(res.data.data);
        })
        .catch(err => err);
    }, [search])

    const handleChange =(e)=>{
        setSearch(e.target.value)  
    }
    
    


    return (
        <>
            <div className="searchFunction">
              <button className="sort_btn">
              Sort by
                <span> 
                    <BiIcon.BiChevronDown/>
                </span>
              </button>
              <form className="form_group">
                  <input type="text" name="search" placeholder="Search drivers record" onChange={handleChange} />
                  <button onClick={handleSearch}>
                      <FaIcon.FaSearch />
                  </button>
              </form>
                 {/* <Link to="/home/register" className="add_driver_box" > */}
                 <button to="/home/register" className="add_driver"  onClick={handleRegister}  >
                      <span>
                          <FaIcon.FaPlus/> 
                      </span>
                      Add Driver
                  </button>
                 {/* </Link> */}
             
            </div>
        </>
    )
}

export default Sort
