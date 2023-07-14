import { Route, Routes, Navigate } from "react-router-dom"
import React, { useEffect, useReducer, useState } from "react"
import { Cloudinary } from "@cloudinary/url-gen";

// import "./firebase"

import MapPage from "./pages/Map Page/Map Page"

import './App.scss';

function App() {

    // ------------------------ State Variables ------------------------

    const [ className, setClassName ] = useState("")















    // ------------------------ Reducers ------------------------

    // ------------ Cloudinary ------------

    // Initial State

    const initialCldData = {
        credentials: {
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        },
        cld: null,
        widgets: {},
    }

    // Reducer Function

    function reducer(state, action) {

        const { type, payload } = action

        switch(type) {

            case "Add_Widget":

                state.widgets = {
                    ...state.widgets,
                    ...payload
                }

                return state

            case "Set_Cld":

                return {
                    ...state,
                    cld: payload
                }

            default:

                return state
                
        }

    }

    const [ cldData, dispatch ] = useReducer(reducer, initialCldData)

    // Actions
    const Set_Cld = (cld) => dispatch({ type: "Set_Cld", payload: cld })
    const Add_Widget = (newWidgetEntry) => dispatch({ type: "Add_Widget", payload: newWidgetEntry })















    // ------------------------ Functions ------------------------
    function Create_Cld() {
        Set_Cld(
            new Cloudinary({
                cloud: {
                    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME
                }
            })
        )
    }















    // ------------------------ App ------------------------

    document.title = className
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    useEffect(Create_Cld, [])
    

    return (
        <main className={className}>
            <Routes>
                <Route index element={<Navigate to="/map" replace={true} />} />
                <Route path="/map" element={
                    <MapPage
                        setClassName={setClassName}
                        cldData={cldData}
                        Add_Widget={Add_Widget} />
                } />
            </Routes>
        </main>
    );
}

export default App;