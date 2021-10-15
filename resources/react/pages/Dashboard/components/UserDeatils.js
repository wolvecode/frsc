import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaMarker } from "react-icons/fa";
import ProfilePic from "../../../assest/image/userDone.png";
import ImagePreview from "../../Register/components/ImagePreview";
const UserDeatils = () => {
    const [user, setUser] = useState([]);
    const [total, setTotal] = useState("");
    const [pic, setPic] = useState("");
    // fetch random user
    useEffect(() => {
        axios
            .post("/home/drivers/rand")

            .then((res) => {
                setUser(res.data.data[0]);
            })
            .catch((err) => err);
    }, []);
    // console.log(user);

    // fetch picture

    useEffect(() => {
        axios
            .post("/home/driver/picture", { id: user.id })
            .then((res) => {
                setPic(res.data.data);
            })
            .catch((err) => err);
    }, [user]);
    // fetch total offense
    useEffect(() => {
        axios
            .post("/home/drivers/count", { id: user.id })
            .then((res) => {
                setTotal(res.data.data);
            })
            .catch((err) => err);
    }, [user]);
    // console.log(total);
    const myDate = new Date(user.created_at);

    return (
        <>
            <div className="page_sub_content">
                <div className="profile_edit">
                    <div className="img_des_box">
                        <img src={pic} />
                    </div>
                    <div className="profile_button">
                        <h1>{user.surname + " " + user.firstname}</h1>
                        <p> {user.email} </p>
                    </div>
                    <div className="offense_box">
                        <h1> {total} </h1>
                        <p>Offense Records</p>
                        <p>
                            <span>
                                <FaChevronDown />
                            </span>
                        </p>
                    </div>
                </div>
                <form action="" className="profile_details">
                    <div className="form_group">
                        <p>
                            <label htmlFor="">Phone number</label>
                            <input disabled type="text" value={user.phone} />
                        </p>
                        <p>
                            <label htmlFor="">Registration date</label>

                            <input
                                disabled
                                type="text"
                                value={myDate.toLocaleDateString()}
                            />
                        </p>
                    </div>

                    <p>
                        <label htmlFor="">Address</label>
                        <input
                            disabled
                            type="text"
                            value={user.lga + "," + user.state}
                        />
                    </p>

                    <div className="form_group">
                        <p>
                            <label htmlFor="">Date of birth</label>
                            <input disabled type="text" value={user.birth} />
                        </p>
                        <p>
                            <label htmlFor="">Gender</label>
                            <input disabled type="text" value={user.gender} />
                        </p>
                    </div>

                    <div className="form_group">
                        <p>
                            <label htmlFor="">NIN</label>
                            <input disabled type="text" value={user.nin} />
                        </p>
                        <p>
                            <label htmlFor="" style={{ opacity: "0" }}>
                                ..
                            </label>
                            <input
                                disabled
                                type="button"
                                value="Edit Profile"
                                className="submit_btn"
                            />
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserDeatils;
