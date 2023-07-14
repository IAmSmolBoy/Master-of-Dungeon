// ------------------------ Imports ------------------------

import React, { useState, useEffect, useReducer } from "react"

import { AdvancedImage } from '@cloudinary/react';
// import { upload } from "../../firebase"

import Modal from "../../components/Modal/Modal"
import Navbar from "../../components/Navbar/Navbar"
import NavbarAdd from "../../components/NavbarAdd/NavbarAdd";

import "./Map Page.scss"















export default function MapPage({
    setClassName,
    cldData,
    Add_Widget
}) {

    // --------------------- State Variables ---------------------

    // const [ image, setImage ] = useState(null);
    const [ mapImg, setMapImg ] = useState(null)















    // ------------------------ Reducers ------------------------

    // ------------ Maps and Tokens ------------

    // Initial State

    const initialMapData = {

        map: {
            curr: "",
            maps: {},
            position: {
                x: 0,
                y: 0,
            }
        },

        token: {

        }

    }

    // Reducer Function
    
    function reducer(state, action) {

        const { type, payload } = action

        switch(type) {

            case "Set_Map_Details":

                state.map = {
                    ...state.map,
                    ...payload
                }

                console.log(state)

                return state

            default:

                return state

        }

    }
    
    const [ mapData, dispatch ] = useReducer(reducer, initialMapData)

    // Actions
    const Set_Map_Details = (mapDetails) => dispatch({ type: "Set_Map_Details", payload: mapDetails })













    // --------------------- Helper Functions ---------------------

    // Upload <WIP>

    // function handleUpload(type) {
    //     Firebase WIP

    //     const file = $(e.target).prop("files")[0]
    //     console.log(file)
    //     upload(file).then(res => {
    //         console.log(res)
    //     })
    // }

    // Get Local Storage Data

    function Get_Stored_Data() {

        const storageJSON = localStorage.getItem("mapData")

        return storageJSON ?
            JSON.parse(storageJSON) :
            {
                maps: {},
                currMap: ""
            }

    }
        
            













    // --------------------- Components ---------------------

    function MapNavAdd({ type, children }) {
        return (
            <NavbarAdd
                type={type}
                setMapImg={setMapImg}
                Get_Stored_Data={Get_Stored_Data}
                cldData={cldData}
                Add_Widget={Add_Widget}
            >
                {
                    children
                }
            </NavbarAdd>
        )
    }
















    // ------------------------ Page ------------------------

    useEffect(() => {

        // Getting Local Storage Data
        const storageMapData = Get_Stored_Data()
        const { maps, currMap } = storageMapData

        setMapImg(
            cldData.cld ?
            cldData.cld.image(maps[currMap]) :
            null
        )
        setClassName("map-page")
        Set_Map_Details({
            curr: currMap,
            maps
        })
        
    }, [ setClassName, cldData.cld ])
    
    return (
        <>
            <div className="map-page-map">
                {
                    // image ?
                    //     <img src={URL.createObjectURL(image)} alt="Map" className="map-page-image" /> :
                    //     <></>
                    mapImg ?
                        <AdvancedImage cldImg={ mapImg } /> :
                        <></>
                }
            </div>
            <Modal />
            <Navbar type="party">

            </Navbar>
            <MapNavAdd type="maps">

            </MapNavAdd>
            <MapNavAdd type="tokens">

            </MapNavAdd>
        </>
    )

}