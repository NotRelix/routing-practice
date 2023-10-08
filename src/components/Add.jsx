import React from "react";

function Add({ person, contacts, setContacts }) {
    function handleAdd() {
        if (!(person.ID && person.Name && person.Age && person.Course && person.ContactNumber))
        {
            console.log("return");
            return;
        }
        if (!contacts.some((contact) => parseInt(contact.ID) === parseInt(person.ID))) {
            setContacts([...contacts, person]);
        }
    }

    return (
        <>
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default Add