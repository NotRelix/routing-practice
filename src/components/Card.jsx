import { React, useState } from "react";

function Card({ person, contacts, setContacts }) {
    return (
        <>
            {!person.Edit ? (
                <>
                    <p>ID: {person.ID}</p>
                    <p>Name: {person.Name}</p>
                    <p>Age: {person.Age}</p>
                    <p>Course: {person.Course}</p>
                    <p>Contact # {person.ContactNumber}</p>
                </>
            ) : (
                    <div className="edit">
                        <input disabled type="text" value={person.ID} onChange={(e) => {
                        person.ID = e.target.value;
                        setContacts([...contacts])
                    }
                    } />
                        <input required type="text" value={person.Name} onChange={(e) => {
                        person.Name = e.target.value;
                        setContacts([...contacts])
                    }
                    } />
                        <input required type="text" value={person.Age} onChange={(e) => {
                        person.Age = e.target.value;
                        setContacts([...contacts])
                    }
                    } />
                        <input required type="text" value={person.Course} onChange={(e) => {
                        person.Course = e.target.value;
                        setContacts([...contacts])
                    }
                    } />
                        <input required type="text" value={person.ContactNumber} onChange={(e) => {
                        person.ContactNumber = e.target.value;
                        setContacts([...contacts])
                    }
                    } />
                </div>
            )
            }
        </>
    )
}

export default Card