// ------------------------ Imports ------------------------

import React, { useState, useEffect } from "react"
import $ from "jquery"
import axios from "axios"

import { IoMdAddCircle } from "react-icons/io"

import Modal from "../../components/Modal/Modal"
import Navbar from "../../components/Navbar/Navbar"

import "./Map Page.scss"















// ------------------------ Page ------------------------

export default function MapPage({ setClassName }) {

    const [ image, setImage ] = useState(null);
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)















    // --------------------- Helper Functions ---------------------

    // Upload

    function handleUpload(e) {
        const file = $(e).prop("files")[0]
    }
















    // ------------------------ Components ------------------------

    function NavbarAdd({ type }) {
        return (
            <Navbar className={type + " add"} type={type}>
                <li className={"nav-list-item add-item " + type}>
                    <label htmlFor="upload-file" className={type + " add-item-btn"}>
                        <IoMdAddCircle />
                        <input
                            type="file"
                            name={type}
                            id="upload-file"
                            className={type + "-input"}
                            accept="image/*"
                            onChange={handleUpload}
                            hidden />
                    </label>
                </li>
            </Navbar>
        )
    }

    useEffect(() => {
        $(async function () {
            console.log("-------------Start-------------")
            console.log(
                localStorage.getItem("maps"),
                localStorage.getItem("current map")
            )

            setClassName("map-page")

            try {
                const apiStatus = await axios.get(`${process.env.REACT_APP_API_URI}/api`);
                console.log('API Status:', apiStatus.data.message);

                // const postResponse = await axios.post(`/api/data`, { name: 'John', age: 25 });
                // console.log('POST response:', postResponse.data);

                // const putResponse = await axios.put(`/api/data/1`, { name: 'Jane', age: 30 });
                // console.log('PUT response:', putResponse.data);

                // const deleteResponse = await axios.delete(`/api/data/1`);
                // console.log('DELETE response:', deleteResponse.data);

            } catch (error) {
                console.log('API Status:', "Something went wrong.");
                console.error('Error:', error);
            }
        });

    }, [ setClassName ])




    return (
        <>
            {
                image ?
                    <img src={URL.createObjectURL(image)} alt="Map" className="map-page-image" /> :
                    <></>
            }
            <Modal />
            <Navbar type="party">

            </Navbar>
            <NavbarAdd type="maps">

            </NavbarAdd>
            <NavbarAdd type="tokens">

            </NavbarAdd>
        </>
    )
}