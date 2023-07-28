import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="addButton">
            <Link to="/AddContact">
                <button className="btn btn-success">Add new contact</button>
            </Link>
        </div>
    );
};

export default Navbar;