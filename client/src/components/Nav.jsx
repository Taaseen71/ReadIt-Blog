import React from 'react';
import { Link, NavLink } from "react-router-dom"

export default function Nav(props) {
    let CurrentUsername;
    if (props.currentUser) {
        CurrentUsername = props.currentUser.username.split('')
        CurrentUsername[0] = CurrentUsername[0].toUpperCase();
        CurrentUsername = CurrentUsername.join('')
    }

    return (
        <div className="navWrappingDiv">

            <ul>
                <nav>
                    <NavLink className="navLinks" to="/"> Browse All Articles </NavLink>
                    {props.currentUser && (<NavLink className="navLinks" to="/articles"> My Articles </NavLink>)}
                    {/*   
                        //? if user is present, show my Articles, or else, don't show
                    */}
                </nav>
                <div className="userOrLogin">
                    {props.currentUser
                        ?
                        <div className="usernameAndLogout">
                            <h6 className="loggedInUser">
                                Hello {CurrentUsername}
                                {/* {props.currentUser.username} */}
                            </h6>
                            <button className="logOutButton" onClick={props.handleLogOut}> LogOut </button>
                        </div>
                        :

                        <NavLink className="navLinks" to="/user/LogIn"> Log In/Register </NavLink>

                    }
                </div>
            </ul>


        </div>
    )
}
