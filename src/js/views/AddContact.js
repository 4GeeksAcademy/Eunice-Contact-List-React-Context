import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { v4 as uuidv4 } from "uuid";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [contact, setContact] = useState(store.newContact);


    useEffect(() => {
        if (id) {
            const existingContact = store.Contacts.find((c) => c.id === id);
            if (existingContact) {
                setContact(existingContact);
            }
        }
    }, [store.Contacts, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            actions.updateContact(contact);
        } else {

            const newContact = { ...contact, id: uuidv4() };
            actions.createContact(newContact);
        }

        setContact({
            name: '',
            email: '',
            phone: '',
            address: '',
        });
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1 className="title text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName1" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputFullName1"
                        placeholder="Full Name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPhone1"
                        placeholder="Enter phone"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress1"
                        placeholder="Enter address"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="saveButton btn btn-primary">
                    Save
                </button>
                <Link to="/Contacts">or get back to contacts</Link>
            </form>
        </div>
    );
};

export default AddContact;