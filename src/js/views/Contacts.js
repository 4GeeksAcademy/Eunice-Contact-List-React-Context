import React, { useContext } from 'react'
import ContactCard from '../component/ContactCard'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';

const Contacts = () => {
    const { store, actions } = useContext(Context)

    return (
        <div>
            <div className="contactContainer">
                {store.Contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}

            </div>
        </div>
    );
};

export default Contacts;