import React from 'react'

const TableRecord = ( { nin,name,phoneNumber,email, dateOfBirth,}) => {
    return (
        <>
            <ol>
                <li>
                    <input type="checkbox" />
                </li>
                <li> {nin} </li>
                <li> {name} </li>
                <li> {phoneNumber} </li>
                <li> {email} </li>
                <li>{dateOfBirth}</li>
                <li>
                    <button disabled>View Record</button>
                </li>
            </ol>
        </>
    )
}

export default TableRecord
