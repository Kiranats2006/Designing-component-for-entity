// write the component code here
import React from "react";
const userCard=()=>{
    const profilePicture="https://via.placeholder.com";
    const name= "John Doe";
    const email= "JohnDoe@gmail.com";
    const phoneNo="8884345249";
    const address="123 Elm Street, Springfield, USA";
    return(
        <div className="userCard">
            <image src={profilePicture} />
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phoneNo}</h2>
            <h2>{address}</h2>
        </div>
    )
}
export default userCard;