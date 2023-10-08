import React from "react";

function Delete({personToDelete, contacts, setContacts}) {
    function handleDelete() {
        setContacts(contacts.filter((person) => person.ID != personToDelete.ID))
    }

    return (
        <>
            <button className="delete" onClick={() => handleDelete()}>Delete</button>
        </>
    )
}

export default Delete