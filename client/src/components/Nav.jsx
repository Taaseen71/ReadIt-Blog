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
        <div>
            This is the Nav
            <ul>
                <nav>
                    <NavLink to="/"> Browse All Articles </NavLink>
                    {props.currentUser && (<NavLink to="/articles"> My Articles </NavLink>)}
                    {/*   
                        //? if user is present, show my Articles, or else, don't show
                        //! myArticles hasn't been rendered YET! render 
                    */}
                </nav>

                {props.currentUser
                    ?
                    <>
                        <h6>
                            Hello {CurrentUsername}
                            {/* {props.currentUser.username} */}
                        </h6>
                        <button onClick={props.handleLogOut}> LogOut </button>
                    </>
                    :
                    <Link to="/user/LogIn"> Log In/Register </Link>
                }

            </ul>


        </div>
    )
}
