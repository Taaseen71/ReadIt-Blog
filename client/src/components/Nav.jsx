import React from 'react';
import { Link } from "react-router-dom"

export default function Nav(props) {
    let CurrentUsername;
    if (props.currentUser) {
        CurrentUsername = props.currentUser.username.split('')
        CurrentUsername[0] = CurrentUsername[0].toUpperCase();
        CurrentUsername = CurrentUsername.join('')
    }

    return (
        <div>
            This is the Nav
            <ul>
                <li>
                    <Link to="/"> Browse All Articles </Link>
                </li>
                <li>
                    {props.currentUser
                        ?
                        <>
                            <h6>
                                Hello {CurrentUsername}
                            </h6>
                            <button onClick={props.handleLogOut}> LogOut </button>
                        </>
                        :
                        <>
                            <Link to="/user/LogIn"> Log In/Register </Link>
                        </>
                    }
                </li>

            </ul>

        </div>
    )
}
