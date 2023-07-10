import { Route, Routes, Navigate } from "react-router-dom"
import React, { useState } from "react"

import MapPage from "./pages/Map Page/Map Page"

import './App.scss';

function App() {

    const [ className, setClassName ] = useState("")

    document.title = className
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <main className={className}>
            <Routes>
                <Route index element={<Navigate to="/map" replace={true} />} />
                <Route path="/map" element={<MapPage setClassName={setClassName} />} />
            </Routes>
        </main>
    );
}

export default App;