import React from "react";

const TableRecord = ({ id, date, type, amount, status }) => {
    // styles
    const dash_btn = {
        padding: "1.4rem 3.5rem",
        color: "$color-primary",
    };
    const success = {
        color: "green",
    };
    const fail = {
        color: "#22D389",
    };

    return (
        <>
            <ol>
                <li>
                    <input type="checkbox" />
                </li>
                <li> {id} </li>
                <li> {date} </li>
                <li> {type} </li>
                <li> {amount} </li>
                <li style={status ? success : fail}>
                    {status ? "PAID" : "UNPAID"}
                </li>
                <li>
                    <button disabled className="dash_btn" style={dash_btn}>
                        View
                    </button>
                </li>
            </ol>
        </>
    );
};

export default TableRecord;
