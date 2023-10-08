import React, { useState } from "react";

function Update({ personToUpdate, contacts, setContacts}) {
    const [isEditing, setIsEditing] = useState(personToUpdate.Edit)

    function toggleEdit() {
        personToUpdate.Edit = !personToUpdate.Edit;
        setContacts([...contacts])
    }

    function handleUpdate() {
        personToUpdate.Edit = false;
        setContacts([...contacts])
    }

    return (
        <>
            {!personToUpdate.Edit ? (
                <button className="update" onClick={toggleEdit}>Edit</button>
            )
                : (
                <button className="update" onClick={handleUpdate}>Update</button>
            )}
        </>
    )
}

export default Update