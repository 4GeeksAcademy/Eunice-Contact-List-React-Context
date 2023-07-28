import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {

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
        <div className="col-6 editButtons text-end">
          <Link to={`/edit/${contact.id}`}><button><i className="fa-solid fa-pencil"></i></button></Link>
          <button><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    </div >
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactCard;