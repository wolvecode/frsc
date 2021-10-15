import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as events from "events";
import { FaCaretDown } from "react-icons/fa";

const ContactAdress = () => {
    const history = useHistory();

    const initialState = {
        driver_id: localStorage.getItem("created_id"),
        address_1: "",
        city: "",
        lga: "",
        state: "",
        postal_code: "",
        address_2: "",
        city_2: "",
        lga_2: "",
        state_2: "",
        postal_code_2: "",
    };
    const [contactAddress, setContactAddress] = useState(initialState);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setContactAddress({ ...contactAddress, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/home/register/contact", contactAddress)
            .then((res) => history.push("/home/register/upload"))
            .catch((err) => err);
    };

    const {
        address_1,
        city,
        lga,
        state,
        postal_code,
        address_2,
        city_2,
        lga_2,
        state_2,
        postal_code_2,
    } = contactAddress;
    return (
        <form onSubmit={handleSubmit} className="user">
            <div className="form_row">
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="address_1">Enter Address Line 1</label>
                    <div>
                        <input
                            type="text"
                            name="address_1"
                            value={address_1}
                            placeholder="2, Adebowale|"
                            className="user_input"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="city">Enter City</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="city"
                            value={city}
                            onChange={handleChange}
                            className="user_input"
                        >
                            <option value="">Please select city</option>
                            <option value="Male">Irewolede</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="lga">Enter LGA</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="lga"
                            value={lga}
                            onChange={handleChange}
                            className="user_input"
                        >
                            <option value="">Please select LGA</option>
                            <option value="Male">Ilorin-west</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form_row">
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="state1">Enter State</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="state"
                            value={state}
                            onChange={handleChange}
                            className="user_input"
                        >
                            <option value="">Please select state</option>
                            <option value="Male">Kwara</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="postal_code">Enter Postal Code</label>
                    <div>
                        <input
                            type="number"
                            name="postal_code"
                            value={postal_code}
                            placeholder="Zip code"
                            className="user_input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* user info  */}
            </div>
            <hr />
            <div className="form_row">
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="address_2">Enter Address Line 2</label>
                    <div>
                        <input
                            type="text"
                            name="address_2"
                            value={address_2}
                            placeholder="2, Adebowale|"
                            className="user_input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="city_2">Enter City</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="city_2"
                            value={city_2}
                            onChange={handleChange}
                            className="user_input"
                        >
                            <option value="">Please select state</option>
                            <option value="Male">Irewolede</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="lga_2">Enter LGA</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="lga_2"
                            value={lga_2}
                            onChange={handleChange}
                            className="user_input"
                        >
                            <option value="">Please select LGA</option>
                            <option value="Male">Ilorin-west</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form_row">
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="state_2">Enter State</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="state_2"
                            id=""
                            onChange={handleChange}
                            value={state_2}
                            className="user_input"
                        >
                            <option value="">Please select state</option>
                            <option value="Male">Kwara</option>
                            <option value="Female">Orunla</option>
                        </select>
                    </div>
                </div>
                {/* user info  */}
                <div className="form_group">
                    <label htmlFor="postal_code_2">Enter Postal Code</label>
                    <div>
                        <input
                            type="text"
                            name="postal_code_2"
                            value={postal_code_2}
                            placeholder="Zip code"
                            className="user_input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="save">
                <div className="">
                    <button type="submit" onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactAdress;
