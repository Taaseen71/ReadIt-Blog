import React from 'react'

export default function Home(props, ) {
    console.log("THis is props", props.data)
    console.log("this is user")

    // let items = this.state.data.map(item =>
    //     <>
    //         <h5> <span>{item.id}.</span> {item.title}</h5>
    //         <p> {item.description}</p>
    //     </>
    // )

    return (
        <div>
            This is the Home Page

            <div>
                {props.data.map(item =>
                    <>
                        <h5> <span>{item.id}.</span> {item.title}</h5>
                        {/* <h6> {props.users[0].username}</h6> */}

                        <p> {item.description}</p>
                        <h6>Commments:</h6>
                        <div>
                            {item.comments.map(parameter => {
                                return (
                                    <>
                                        <p>{parameter.my_comment}</p>
                                        <p>{parameter.user_id}</p>
                                        {/* <p>{x[parameter.user_id]}</p> */}
                                    </>
                                )
                            })}
                        </div>
                        {/* 
                        <div>
                            {items}
                        </div> */}


                    </>
                )}
            </div>

        </div>
    )
}
