import React, { Children } from 'react'



const Table = ({children}) => {
    console.log(children);
    return (
        <>
            <div className="table">
                <ul>
                    <li>
                        <input type="checkbox" disabled  />
                    </li>
                    <li> ID </li> 
                    <li> Date </li>
                    <li> Type </li>
                    <li>Amount</li>
                    <li>Status</li>
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
