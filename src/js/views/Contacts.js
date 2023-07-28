import React, { useContext } from 'react'
import ContactCard from '../component/ContactCard'
import { Context } from '../store/appContext'

const Contacts = () => {
    const { store, actions } = useContext(Context)

    return (
        <div>
            <div className="contactContainer">
                {store.Contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} actions={actions} />
                ))}

            </div>
        </div>
    );
};

export default Contacts;