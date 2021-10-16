import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const AddOffense = ({ setAddOffence, addOffence }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post("/home/drivers")
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => err);
    }, [data]);

    const selectOptions = data.map((driver) => (
        <option key={driver.id} value={driver.id}>
            {driver.surname + " " + driver.firstname}
        </option>
    ));

    const [driverOffense, setDriverOffense] = useState("");
    const [offenseCode, setOffenseCode] = useState("");
    const [offenseCategory, setOffenseCategory] = useState("");
    const [offensePenalty, setOffensePenalty] = useState("");
    const [location, setLocation] = useState("");
    const [driver_id, setDriver_id] = useState("");

    const handleDriverOffense = (e) => {
        setDriverOffense(e.target.value);
    };
    const handleOffenseCode = (e) => {
        setOffenseCode(e.target.value);
    };

    const handleOffenseCategory = (e) => {
        setOffenseCategory(e.target.value);
    };

    const handleOffensePenalty = (e) => {
        setOffensePenalty(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };
    const handleDriver_id = (e) => {
        setDriver_id(e.target.value);
    };

    const handleAddOffence = () => {
        setAddOffence(!addOffence);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const offenseToSubmit = {
            offense: driverOffense,
            code: offenseCode,
            category: offenseCategory,
            penalty: offensePenalty,
            location: location,
            driver_id: localStorage.getItem("d_id"),
        };

        axios
            .post("/home/add/offense", offenseToSubmit)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => err);

        setAddOffence(!addOffence);
    };

    return (
        <>
            <div className="addOffence">
                <div className="modal_content">
                    <div className="date">
                        <div className="frame"></div>
                        <div>Friday 8th September, 2021</div>
                    </div>
                    <h1>Add Offense</h1>

                    <form className="full">
                        <div className="form_group full">
                            <div className="sub_form_group group_1">
                                <label htmlFor="gender">Select Offense</label>
                                <div className="relative">
                                    <label className="option">
                                        <FaCaretDown />
                                    </label>
                                    <select
                                        name="driverOffense"
                                        className="user_input"
                                        value={driverOffense}
                                        onChange={handleDriverOffense}
                                    >
                                        <option value="">
                                            Select Criminal offense
                                        </option>
                                        <option value="Road Marking Violation">
                                            Road Marking Violation
                                        </option>
                                        <option value="Vehicle licence Violation">
                                            Vehicle licence Violation
                                        </option>
                                        <option value="Wrongful Overtaking">
                                            Wrongful Overtaking
                                        </option>
                                        <option value=" Light Violation">
                                            Light Violation
                                        </option>
                                        <option value="Road Marking Violation">
                                            Road Marking Violation
                                        </option>
                                        <option value="Sign Violation">
                                            Sign Violation
                                        </option>
                                        <option value="Road Obstruction">
                                            Road Obstruction
                                        </option>
                                        <option value="Overloading">
                                            Overloading
                                        </option>
                                        <option value="Road Obstructionery">
                                            Road Obstruction
                                        </option>
                                        <option value="Driver's License Violation">
                                            Driver's License Violation
                                        </option>
                                        <option value="Speed Limit Violation">
                                            Speed Limit Violation
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="sub_form_group group_2">
                                <label htmlFor=""> Offense Code </label>
                                <input
                                    type="number"
                                    placeholder="Code"
                                    value={offenseCode}
                                    onChange={handleOffenseCode}
                                />
                            </div>
                        </div>

                        <div className="form_group">
                            <div className="sub_form_group group_1">
                                <label htmlFor="gender">Offense Category</label>
                                <div className="relative">
                                    <label className="option">
                                        <FaCaretDown />
                                    </label>
                                    <select
                                        name=" offenseCategory"
                                        className="user_input"
                                        value={offenseCategory}
                                        onChange={handleOffenseCategory}
                                    >
                                        <option value="Criminal">
                                            Criminal
                                        </option>
                                        <option value="Non-Criminal">
                                            Non-Criminal
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="sub_form_group group_2">
                                <label htmlFor=""> Offense Penalty </label>
                                <input
                                    name="offensePenalty"
                                    type="number"
                                    placeholder="NGN"
                                    value={offensePenalty}
                                    onChange={handleOffensePenalty}
                                />
                            </div>
                        </div>
                        <div className="location">
                            <label htmlFor="">Enter Location</label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={handleLocation}
                            />
                        </div>
                        <div className="btn_group">
                            <button
                                className="btn btn_1"
                                type="button"
                                onClick={handleAddOffence}
                            >
                                Cancel
                            </button>
                            <button className="btn" onClick={handleSubmit}>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddOffense;
