import React from 'react';
import { Link } from "react-router-dom"

export default function Nav(props) {
    let CurrentUsername

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
                    {props.currentUser ?
                        <> Hello {CurrentUsername} </>
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
