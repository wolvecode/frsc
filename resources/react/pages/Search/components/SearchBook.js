import React from 'react'
import Book from "../../../assest/image/Search/book.png"

const SearchBook = () => {
    return (
        <>
             <div className="result_content">
                
                <img src={Book} alt=""/>
                <h1>
                Record not found
                </h1>
                <p>
                No driver record found. Click <span> Register Driver</span> to register as new driver.
                </p>
                <button className="btn">
                Register Driver
                </button>
              </div>
        </>
    )
}

export default SearchBook
