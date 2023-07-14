// ------------------------ Imports ------------------------

import React, { useEffect } from "react"
import { IoMdAddCircle } from "react-icons/io"

import Navbar from "../../components/Navbar/Navbar"

import "./NavbarAdd.scss"

export default function NavbarAdd({
    type,
    children,
    setMapImg,
    Get_Stored_Data,
    cldData,
    Add_Widget
}) {

    // ------------------------ Variables ------------------------

    const { credentials, widgets } = cldData
    const { cloudName, uploadPreset } = credentials















    // ------------------------ Functions ------------------------
    
    // On State Change
    
    function On_Widget_State_Change(err, res) {

        if (err) return console.log("Widget Error: ", err)
        
        if (res.event === "success") {

            const { public_id, original_filename } = res.info
            const mapData = Get_Stored_Data()

            const newMapEntry = {}
            newMapEntry[original_filename] = public_id
    
            localStorage.setItem(
                "mapData",
                JSON.stringify({
                    currMap: original_filename,
                    maps: {
                        ...mapData.maps,
                        ...newMapEntry
                    }
                })
            )

            setMapImg(public_id)

        }
    
    }

    // Create Upload Widget

    function Create_Upload_Widget() {

        if (!widgets[type]) {
            const newWidgetEntry = {}
            newWidgetEntry[type] = window.cloudinary.createUploadWidget(
                {
                    cloudName,
                    uploadPreset,
                    folder: "map",
                    cropping: true,
                    showAdvancedOptions: true,  
                },
                On_Widget_State_Change
            )
            
            Add_Widget(newWidgetEntry)
        }

    }















    // ------------------------ Component ------------------------

    useEffect(Create_Upload_Widget, [])

    return (
        <Navbar className={type + " add"} type={type}>
            {
                children
            }
            <li className={"nav-list-item add-item " + type}>
                {/* <label htmlFor="upload-file" className={type + " add-item-btn"}>
                    <IoMdAddCircle />
                    <input
                        type="file"
                        name={type}
                        id="upload-file"
                        className={type + "-input"}
                        accept="image/*"
                        onChange={handleUpload}
                        hidden />
                </label> */}
                <button
                    className={type + " add-item-btn"}
                    onClick={(e) => { console.log(widgets[type]); widgets[type].open() }} >
                    <IoMdAddCircle />
                </button>
            </li>
        </Navbar>
    )

}