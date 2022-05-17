import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        DATA        <Link to="/add">
          <button className="ui button red right">Add Data</button>
        </Link>
      </h2>
      <div className="ui celled table">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
