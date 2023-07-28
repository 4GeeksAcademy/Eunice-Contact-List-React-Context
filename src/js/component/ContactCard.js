import React, { useState } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, actions }) => {
  const [showModal, setShowModal] = useState();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contactContainer">
      <div className="row bigContainer rounded">
        <div className="col-2 contactPic">
          <img src="https://raw.githubusercontent.com/ierrandonea/react-contact-list/master/src/img/m101.jpg"
            className="rounded-circle"></img>
        </div>
        <div className="col-4 contactInfo text-start">
          <label className="fs-4">{contact.name}</label>
          <div className="address">
            <i className="fa-solid fa-location-dot text-danger"></i>
            <span className="address m-3 text-secondary">{contact.address}</span>
          </div>
          <div className="phone">
            <i className="fa-solid fa-phone-flip text-success"></i>
            <span className="phone m-3 text-secondary">{contact.phone}</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope text-primary"></i>
            <span className="email m-3 text-secondary">{contact.email}</span>
          </div>
        </div>
        <div className="col-5 editButtons text-end">
          <Link to={`/edit/${contact.id}`}><button><i className="fa-solid fa-pencil"></i></button></Link>
          <button onClick={handleOpenModal}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>


        <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: `${showModal ? "block" : "none"}` }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this contact?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={() => { actions.deleteContact(contact.id); handleCloseModal(); }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div >
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactCard;