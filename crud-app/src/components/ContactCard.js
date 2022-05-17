import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, layout, name, capacity } = props.contact;
  return (
    <div className="item">
       <div className="content"> 
          <table>
            <thead>
              <tr>
                <th>{layout}</th>
                <th>{name}</th>
                <th>{capacity}</th>
              </tr>
            </thead>
          </table>
          {/* </Link> */}
       </div> 
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue"}}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
