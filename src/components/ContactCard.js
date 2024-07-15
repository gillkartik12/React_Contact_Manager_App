import React from "react";
import user from "../images/contact.jpg";
import { Link } from "react-router-dom";
//arrow function
const ContactCard = (props) => {
  //defining it so can be reused again
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/*inside to, we can enter path name, contants */}
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "0px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link
        to={{ pathname: `/edit`, state: { contact: props.contact } }}
      >
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "0px" }}
        ></i>
      </Link>
    </div>
  );
};
export default ContactCard;
