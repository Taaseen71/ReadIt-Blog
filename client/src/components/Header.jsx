import React from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <div>
                <h1>ReadIt, Where Expression is key</h1>
            </div>
            <>
                <Route to="/" >
                    <Nav />
                </Route>
            </>
        </>
    )
}
