import { React, useState, useEffect } from "react";
import InputContact from "../components/InputContact";
import Card from "../components/Card";
import Add from "../components/Add";
import Delete from "../components/Delete";
import Update from "../components/Update";
import './ContactForm.css'

function ContactForm() {
    const contactList = [
        { ID: 1, Name: 'Reece', Age: 19, Course: 'BSCS', ContactNumber: 11111111, Edit: false },
        { ID: 2, Name: 'Fitz', Age: 20, Course: 'BSIT', ContactNumber: 22222222, Edit: false },
        { ID: 3, Name: 'Ernie', Age: 21, Course: 'BSDN', ContactNumber: 33333333, Edit: false },
        { ID: 4, Name: 'Ian', Age: 19, Course: 'BSIE', ContactNumber: 44444444, Edit: false },
        { ID: 5, Name: 'Philip', Age: 24, Course: 'BSPS', ContactNumber: 55555555, Edit: false },
        { ID: 6, Name: 'Samuel', Age: 25, Course: 'BSMed', ContactNumber: 66666666, Edit: false },
        { ID: 7, Name: 'Ross', Age: 19, Course: 'BSCS', ContactNumber: 77777777, Edit: false },
    ]

    const [contacts, setContacts] = useState(contactList);
    const [person, setPerson] = useState({});

    return (
        <>
            <h1>Contact Form</h1>
            <div className="input-container">
                <InputContact person={person} setPerson={setPerson} />
                <Add person={person} contacts={contacts} setContacts={setContacts} />
            </div>
            <div className="card-container">
                {contacts.map((person, index) => (
                    <div className="card" key={index}>
                        <Card person={person} contacts={contacts} setContacts={setContacts} />
                        <div className="button-container">
                            <Update
                                personToUpdate={person}
                                contacts={contacts}
                                setContacts={setContacts}
                            />
                            <Delete personToDelete={person} contacts={contacts} setContacts={setContacts} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ContactForm