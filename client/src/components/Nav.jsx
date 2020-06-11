import React from 'react';
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            This is the Nav

            <ul>
                <li>
                    <Link to="/"> Browse All Articles </Link>
                </li>
                <li>
                    <Link to="/LogIn"> Log In </Link>
                </li>
                <li>
                    <Link to="/SignUp"> Sign Up</Link>
                </li>
                <li>
                    <Link to="/SignUp"> </Link>
                </li>

            </ul>

        </div>
    )
}
