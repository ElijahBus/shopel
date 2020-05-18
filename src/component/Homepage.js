import React from 'react'
// TODO:
import Navbar from './sub/Navbar'
import HomeMap from './sub/Map'
import '../css/layout.css'

export default function Homepage(props) {
    return (
        <div className="container">
            <Navbar />
            <HomeMap />
        </div>
    )
}