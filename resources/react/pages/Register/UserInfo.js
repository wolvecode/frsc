import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";

const UserInfo = () => {
    const [states, setStates] = useState([]);
    const [surName, setSurname] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nationality, setNationality] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [nin, setNin] = useState("");
    const [state, setState] = useState("");
    const [lga, setLga] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);

    if (shouldRedirect) {
        window.location = shouldRedirect;
    }

    const history = useHistory();

    const handleSurname = (e) => {
        setSurname(e.target.value);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleNationality = (e) => {
        setNationality(e.target.value);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
    };
    const handleNin = (e) => {
        setNin(e.target.value);
    };
    const handleLga = (e) => {
        setLga(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleState = (e) => {
        setState(e.target.value);
    };
    const handleBirth = (e) => {
        setBirth(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            surname: surName,
            firstname: firstName,
            lastname: lastName,
            email: email,
            nationality: nationality,
            phone: phone,
            gender: gender,
            birth: birth,
            nin: nin,
            state: state,
            lga: lga,
        };

        axios
            .post("/home/register/info", dataToSubmit)
            .then((res) => {
                localStorage.setItem(
                    "created_id",
                    JSON.stringify(res.data.data.id)
                );
                history.push("/home/register/contact");
            })
            .catch((err) => err);
    };

    return (
        <form className="user" onSubmit={handleSubmit}>
            <div className="form_row">
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="surName">Enter Surname</label>
                    <div>
                        <input
                            type="text"
                            name="surName"
                            placeholder="Jimoh|"
                            value={surName}
                            onChange={handleSurname}
                            className="user_input"
                            required
                        />
                    </div>
                </div>

                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="firstName">Enter First Name</label>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="First name"
                            className="user_input"
                            onChange={handleFirstName}
                            required
                        />
                    </div>
                </div>
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="lastName">Enter Middle Name</label>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="Middle name"
                            className="user_input"
                            onChange={handleLastName}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="form_row">
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="email">Enter Email</label>
                    <div>
                        <input
                            // type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            className="user_input"
                            onChange={handleEmail}
                            required
                        />
                    </div>
                </div>

                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="phone">Enter Phone Number</label>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            placeholder="+234"
                            className="user_input"
                            onChange={handlePhone}
                            required
                        />
                    </div>
                </div>
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="gender">Enter Gender</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="gender"
                            value={gender}
                            onChange={handleGender}
                            className="user_input"
                        >
                            <option value="">select gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="form_row">
                {/* user info  nationality */}
                <div className="form_group">
                    <label htmlFor="nationality">Enter Nationality</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="nationality"
                            value={nationality}
                            onChange={handleNationality}
                            className="user_input"
                        >
                            <option value="">Select nationality</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Congo">Non-Nigerian</option>
                        </select>
                    </div>
                </div>

                {/* user info  nationality */}
                <div className="form_group">
                    <label htmlFor="state">Select State</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="state"
                            value={state}
                            onChange={handleState}
                            className="user_input"
                        >
                            <option value="">Select state</option>
                            <option value="ABIA">ABIA</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa">Akwa</option>
                            <option value="Benuw">Benue</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Osun">Osun</option>
                            <option value="Taraba">Taraba</option>
                        </select>
                    </div>
                </div>

                {/* user info  nationality */}
                <div className="form_group">
                    <label htmlFor="nationality">Enter Local government</label>
                    <div className="relative">
                        <label className="option">
                            <FaCaretDown />
                        </label>
                        <select
                            name="nationality"
                            value={lga}
                            onChange={handleLga}
                            className="user_input"
                        >
                            <option value="">Select local government</option>
                            <option value="Arochukwu">Arochukwu</option>
                            <option value="Bende">Bende</option>
                            <option value="Ikwuano">Ikwuano</option>
                            <option value="Isiala">Isiala</option>
                            <option value="Isiala Ngwa South">Isiala Ngwa South</option>
                            <option value="Isuikwuato">Isuikwuato</option>
                            <option value="Obi Ngwa">Obi Ngwa</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="form_row date_of_birth">
                {/* user info  */}

                <div className="form_group">
                    <label htmlFor="birth">Enter Date of Birth</label>
                    <div>
                        <input
                            type="date"
                            data-date-inline-picker="true"
                            name="birth"
                            value={birth}
                            onChange={handleBirth}
                            placeholder="Day"
                            className="user_input"
                            required
                        />
                    </div>
                </div>

                <div className="form_group">
                    <label htmlFor="nin">Enter NIN</label>
                    <div>
                        <input
                            type="text"
                            name="nin"
                            value={nin}
                            onChange={handleNin}
                            placeholder="National identity number"
                            className="user_input"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="save">
                <div className="">
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </form>
    );
};

export default UserInfo;
