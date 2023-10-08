import React from "react";

function InputContact({person, setPerson}) {
    return (
        <div className="input">
            <label>ID:</label>
            <input required onChange={(e) => setPerson({...person, ID: e.target.value})} type="text" />
            <label>Name:</label>
            <input required onChange={(e) => setPerson({...person, Name: e.target.value})} type="text" />
            <label>Age:</label>
            <input required onChange={(e) => setPerson({...person, Age: e.target.value})} type="number" />
            <label>Course:</label>
            <input required onChange={(e) => setPerson({...person, Course: e.target.value})} type="text" />
            <label>Contact Number:</label>
            <input required onChange={(e) => setPerson({...person, ContactNumber: e.target.value})} type="text" />
        </div>
    )
}

export default InputContact