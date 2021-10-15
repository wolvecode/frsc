import React from 'react'
import searchIcon from "../../../assest/image/Search/Group 6074.svg"

const SearchRecord = () => {
    return (
        <>
            <div className="result_content">
                
                <img src={searchIcon} alt=""/>
                <h1>
                Search for drivers record
                </h1>
                <p>
                Enter driver name in the searchbox
                </p>
              </div>
        </>
    )
}

export default SearchRecord
