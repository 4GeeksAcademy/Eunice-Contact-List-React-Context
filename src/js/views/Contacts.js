import React, { useContext } from 'react'
import ContactCard from '../component/ContactCard'
import { Context } from '../store/appContext'
import Navbar from '../component/Navbar';

const Contacts = () => {
    const { store, actions } = useContext(Context)

    return (
        <div>
            <div className="contactContainer">

                <Navbar />
                {store.Contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} actions={actions} />
                ))}

            </div>
        </div>
    );
};

export default Contacts;