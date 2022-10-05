import React from "react";

export default function FormTest (){
    function handleClick (){}
    return(
        <form className="form" onClick={handleClick}>
            <label>Name</label>
            <input type='text'/>
            <label>Email</label>
            <input type='text'/>
            <label>Password</label>
            <input type='text'/>
        </form>
    )
}
