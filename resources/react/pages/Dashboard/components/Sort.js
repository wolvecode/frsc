import React, { useEffect, useState } from "react";
import * as FaIcon from "react-icons/fa";
import * as BiIcon from "react-icons/bi";
import AddOffense from "./AddOffense";
import axios from "axios";

const Sort = ({ data, setData }) => {
    const [addOffence, setAddOffence] = useState(false);
    const handleAddOffence = () => {
        setAddOffence(!addOffence);
    };

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const dataToSubmit = {
        search: search,
    };
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        axios.post("/home/offense/search", dataToSubmit)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => err);
       
    }, [search]);

    return (
        <>
            <div className="searchFunction">
                <div className="button_group">
                    {addOffence ? (
                        <AddOffense
                            addOffence={addOffence}
                            setAddOffence={setAddOffence}
                        />
                    ) : null}
                </div>
                <button className="sort_btn">
                    Sort by
                    <span>
                        <BiIcon.BiChevronDown />
                    </span>
                </button>
                <form className="form_group">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search offense records"
                        onChange={handleChange}
                    />
                    <button onClick={handleSearch}>
                        <FaIcon.FaSearch />
                    </button>
                </form>

                <button className="add_driver" onClick={handleAddOffence}>
                    <span>
                        <FaIcon.FaPlus />
                    </span>
                    Add Offense
                </button>
            </div>
        </>
    );
};

export default Sort;
