import React, { Children } from 'react'



const Table = ({children}) => {
    return (
        <>
            <div className="table">
                <ul>
                    <li>
                        <input type="checkbox" disabled  />
                    </li>
                    <li> NIN </li>
                    <li> Name </li>
                    <li> Phone Number </li>
                    <li> Email </li>
                    <li>Date of Birth</li>
                    <li style={{opacity: "0"}} > <>
                    veiw Record</></li>
                </ul>

                <div className="children">
                   { children}
                </div>
            </div>
        </>
    )
}

export default Table
